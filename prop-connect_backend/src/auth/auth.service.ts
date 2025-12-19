import {
  Injectable,
  ConflictException,
  UnauthorizedException,
  Logger,
} from '@nestjs/common';
import { User } from '@prisma/client';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { AuthResponse } from './interfaces/auth-response.interface';
import { PasswordService } from './services/password.service';
import { TokenService } from './services/token.service';
import { UserRepository } from './repositories/user.repository';
import { AUTH_MESSAGES } from './constants/auth.constants';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(
    private readonly userRepository: UserRepository,
    private readonly passwordService: PasswordService,
    private readonly tokenService: TokenService,
  ) {}

  async register(registerDto: RegisterDto): Promise<AuthResponse> {
    const { email, phone, password, fullName } = registerDto;

    await this.validateUserDoesNotExist(email, phone);

    const hashedPassword = await this.passwordService.hash(password);

    const user = await this.userRepository.create({
      email,
      phone,
      passwordHash: hashedPassword,
      fullName,
    });

    const token = this.tokenService.generateToken(user.id, user.email);

    this.logger.log('User registered successfully');

    return this.buildAuthResponse(user, token);
  }

  async login(loginDto: LoginDto): Promise<AuthResponse> {
    const { email, password } = loginDto;

    const user = await this.findUserByEmail(email);

    this.validateUserStatus(user);

    await this.validatePassword(password, user.passwordHash);

    this.updateLastLogin(user.id);

    const token = this.tokenService.generateToken(user.id, user.email);

    this.logger.log('User logged in successfully');

    return this.buildAuthResponse(user, token);
  }

  private async validateUserDoesNotExist(
    email: string,
    phone: string,
  ): Promise<void> {
    const existingUser = await this.userRepository.findByEmailOrPhone(
      email,
      phone,
    );

    if (existingUser) {
      this.logger.warn('Registration attempt with existing credentials');
      throw new ConflictException(AUTH_MESSAGES.USER_ALREADY_EXISTS);
    }
  }

  private async findUserByEmail(email: string): Promise<User> {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      this.logger.warn('Login attempt with invalid credentials');
      throw new UnauthorizedException(AUTH_MESSAGES.INVALID_CREDENTIALS);
    }
    return user;
  }

  private validateUserStatus(user: {
    isActive: boolean;
    isSuspended: boolean;
  }): void {
    if (!user.isActive || user.isSuspended) {
      this.logger.warn('Login attempt with inactive or suspended account');
      throw new UnauthorizedException(AUTH_MESSAGES.ACCOUNT_INACTIVE);
    }
  }

  private async validatePassword(
    password: string,
    hash: string,
  ): Promise<void> {
    const isPasswordValid = await this.passwordService.compare(password, hash);

    if (!isPasswordValid) {
      this.logger.warn('Login attempt with invalid password');
      throw new UnauthorizedException(AUTH_MESSAGES.INVALID_CREDENTIALS);
    }
  }

  private updateLastLogin(userId: string): void {
    // Fire-and-forget: non-blocking to prevent login failure if timestamp update fails
    this.userRepository.updateLastLogin(userId).catch((error) => {
      this.logger.error(
        'Failed to update last login timestamp',
        error instanceof Error ? error.message : 'Unknown error',
      );
    });
  }

  private buildAuthResponse(user: User, token: string): AuthResponse {
    return {
      user: {
        id: user.id,
        email: user.email,
        fullName: user.fullName,
        phone: user.phone,
        role: user.role,
        createdAt: user.createdAt,
      },
      accessToken: token,
    };
  }
}
