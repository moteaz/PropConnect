import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MinLength,
  Matches,
  MaxLength,
} from 'class-validator';

export class RegisterDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^\+216\d{8}$/, { message: 'Phone must be in format +216XXXXXXXX' })
  phone: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8, { message: 'Password must be at least 8 characters' })
  @MaxLength(55, { message: 'Password must be at most 55 characters' })
  password: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(3, { message: 'Full name must be at least 3 characters' })
  @MaxLength(100, { message: 'Full name must be at most 100 characters' })
  fullName: string;
}
