import {
  Injectable,
  NotFoundException,
  ForbiddenException,
  Logger,
} from '@nestjs/common';
import { Property } from '@prisma/client';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { PropertyRepository } from './repositories/property.repository';
import { UserRepository } from '../auth/repositories/user.repository';
import { PaginationDto } from '../common/dto/pagination.dto';
import { PaginatedResponse } from '../common/interfaces/paginated-response.interface';
import {
  PROPERTY_CONSTANTS,
  PROPERTY_MESSAGES,
} from './constants/property.constants';

@Injectable()
export class PropertyService {
  private readonly logger = new Logger(PropertyService.name);

  constructor(
    private readonly propertyRepository: PropertyRepository,
    private readonly userRepository: UserRepository,
  ) {}

  async create(userId: string, dto: CreatePropertyDto): Promise<Property> {
    const user = await this.userRepository.findById(userId);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    if (user.listingCount >= PROPERTY_CONSTANTS.MAX_LISTING_PER_USER) {
      throw new ForbiddenException(PROPERTY_MESSAGES.LISTING_LIMIT_REACHED);
    }

    const expiresAt = new Date();
    expiresAt.setDate(
      expiresAt.getDate() + PROPERTY_CONSTANTS.DEFAULT_EXPIRY_DAYS,
    );

    const property = await this.propertyRepository.create({
      ...dto,
      expiresAt,
      owner: { connect: { id: userId } },
    });

    this.logger.log(`Property created: ${property.id}`);
    return property;
  }

  async findAll(
    pagination: PaginationDto,
  ): Promise<PaginatedResponse<Property>> {
    const skip = (pagination.page - 1) * pagination.limit;
    const { properties, total } =
      await this.propertyRepository.findAllPaginated(
        { status: 'AVAILABLE' },
        skip,
        pagination.limit,
      );

    return {
      data: properties,
      meta: {
        page: pagination.page,
        limit: pagination.limit,
        total,
        totalPages: Math.ceil(total / pagination.limit),
      },
    };
  }

  async findById(id: string, userId: string): Promise<Property> {
    const property = await this.propertyRepository.findById(id);

    if (!property) {
      throw new NotFoundException(PROPERTY_MESSAGES.NOT_FOUND);
    }

    if (userId !== property.ownerId) {
      this.propertyRepository.incrementViewCount(id).catch((error) => {
        this.logger.error('Failed to increment view count', error);
      });
    }

    return property;
  }

  async findByOwner(ownerId: string): Promise<Property[]> {
    return this.propertyRepository.findByOwnerId(ownerId);
  }

  async update(
    id: string,
    userId: string,
    dto: UpdatePropertyDto,
  ): Promise<Property> {
    const property = await this.findById(id, userId);

    this.validateOwnership(property.ownerId, userId);

    const updated = await this.propertyRepository.update(id, {
      ...dto,
      updatedAt: new Date(),
    });

    this.logger.log(`Property updated: ${id}`);
    return updated;
  }

  async delete(id: string, userId: string): Promise<void> {
    const property = await this.findById(id, userId);

    this.validateOwnership(property.ownerId, userId);

    await this.propertyRepository.delete(id);

    this.logger.log(`Property deleted: ${id}`);
  }

  private validateOwnership(ownerId: string, userId: string): void {
    if (ownerId !== userId) {
      this.logger.warn(`Unauthorized access attempt by user: ${userId}`);
      throw new ForbiddenException(PROPERTY_MESSAGES.UNAUTHORIZED);
    }
  }
}
