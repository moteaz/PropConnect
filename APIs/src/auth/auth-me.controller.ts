import { Controller, Get, UseGuards, UnauthorizedException } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { GetUser } from './decorators/get-user.decorator';
import { UserRepository } from './repositories/user.repository';
import { UserResponseDto } from './dto/user-response.dto';

@ApiTags('Authentication')
@Controller('auth')
export class AuthMeController {
  constructor(private readonly userRepository: UserRepository) {}

  @Get('me')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get current authenticated user' })
  @ApiResponse({ status: 200, description: 'User retrieved successfully', type: UserResponseDto })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async getCurrentUser(@GetUser('id') userId: string): Promise<UserResponseDto> {
    const user = await this.userRepository.findById(userId);

    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    return {
      id: user.id,
      email: user.email,
      fullName: user.fullName,
      phone: user.phone,
      role: user.role,
      createdAt: user.createdAt,
    };
  }
}
