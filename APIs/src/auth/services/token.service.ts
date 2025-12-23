import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from '../interfaces/jwt-payload.interface';
import { UserRole } from '@prisma/client';

@Injectable()
export class TokenService {
  constructor(private readonly jwtService: JwtService) {}

  generateToken(userId: string, role: UserRole): string {
    const payload: JwtPayload = { sub: userId, role };
    return this.jwtService.sign(payload);
  }
}
