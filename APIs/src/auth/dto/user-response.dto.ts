import { UserRole } from '@prisma/client';

export class UserResponseDto {
  id: string;
  email: string;
  fullName: string;
  phone: string;
  role: UserRole;
  createdAt: Date;
}
