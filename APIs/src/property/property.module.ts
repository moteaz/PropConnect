import { Module } from '@nestjs/common';
import { PropertyService } from './property.service';
import { PropertyController } from './property.controller';
import { PropertyRepository } from './repositories/property.repository';
import { UserRepository } from '../auth/repositories/user.repository';
import { PrismaModule } from '../prisma/prisma.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [PrismaModule, AuthModule],
  controllers: [PropertyController],
  providers: [PropertyService, PropertyRepository, UserRepository],
  exports: [PropertyService],
})
export class PropertyModule {}
