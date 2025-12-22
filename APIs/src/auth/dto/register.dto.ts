import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MinLength,
  Matches,
  MaxLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Sanitize } from '../../common/decorators/sanitize.decorator';

export class RegisterDto {
  @ApiProperty({ example: 'user@example.com', description: 'User email address' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: '+21612345678', description: 'Phone number in format +216XXXXXXXX' })
  @IsString()
  @IsNotEmpty()
  @Matches(/^\+216\d{8}$/, { message: 'Phone must be in format +216XXXXXXXX' })
  phone: string;

  @ApiProperty({ example: 'SecurePass123', description: 'Password (8-55 characters)', minLength: 8, maxLength: 55 })
  @IsString()
  @IsNotEmpty()
  @MinLength(8, { message: 'Password must be at least 8 characters' })
  @MaxLength(55, { message: 'Password must be at most 55 characters' })
  password: string;

  @ApiProperty({ example: 'John Doe', description: 'Full name (3-100 characters)', minLength: 3, maxLength: 100 })
  @IsString()
  @IsNotEmpty()
  @MinLength(3, { message: 'Full name must be at least 3 characters' })
  @MaxLength(100, { message: 'Full name must be at most 100 characters' })
  @Sanitize()
  fullName: string;
}
