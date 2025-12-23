import { Injectable, UnauthorizedException, Logger } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { Request } from 'express';
import { UserRepository } from '../repositories/user.repository';
import { JwtPayload } from '../interfaces/jwt-payload.interface';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  private readonly logger = new Logger(JwtStrategy.name);

  constructor(
    private configService: ConfigService,
    private userRepository: UserRepository,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (request: Request): string | null => {
          const token = request?.cookies?.auth_token as string | undefined;
          return token ?? null;
        },
      ]),
      ignoreExpiration: false,
      secretOrKey: configService.getOrThrow('JWT_SECRET'),
    });
  }

  async validate(payload: JwtPayload): Promise<{ id: string; role: string }> {
    const user = await this.userRepository.findById(payload.sub);

    if (!user || !user.isActive || user.isSuspended) {
      this.logger.warn(`Authentication failed for user ID: ${payload.sub}`);
      throw new UnauthorizedException('User not found or inactive');
    }

    return {
      id: user.id,
      role: user.role,
    };
  }
}
