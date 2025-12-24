import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Property, Prisma, PropertyStatus } from '@prisma/client';

@Injectable()
export class PropertyRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Prisma.PropertyCreateInput): Promise<Property> {
    return this.prisma.property.create({
      data,
      include: {
        owner: {
          select: {
            id: true,
            fullName: true,
          },
        },
      },
    });
  }

  async findById(id: string): Promise<Property | null> {
    return this.prisma.property.findUnique({
      where: { id },
      include: {
        owner: {
          select: {
            id: true,
            fullName: true,
            email: true,
            phone: true,
          },
        },
        images: true,
        amenities: {
          include: {
            amenity: true,
          },
        },
      },
    });
  }

  async findAll(where?: Prisma.PropertyWhereInput): Promise<Property[]> {
    return this.prisma.property.findMany({
      where,
      include: {
        owner: {
          select: {
            id: true,
            fullName: true,
          },
        },
        images: {
          where: { isPrimary: true },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findAllPaginated(
    where: Prisma.PropertyWhereInput,
    skip: number,
    take: number,
  ): Promise<{ properties: Property[]; total: number }> {
    const [properties, total] = await Promise.all([
      this.prisma.property.findMany({
        where,
        skip,
        take,
        include: {
          owner: {
            select: {
              id: true,
              fullName: true,
              phone: true,
            },
          },
          images: {
            where: { isPrimary: true },
          },
        },
        orderBy: {
          createdAt: 'desc',
        },
      }),
      this.prisma.property.count({ where }),
    ]);

    return { properties, total };
  }

  async findByOwnerId(ownerId: string): Promise<Property[]> {
    return this.findAll({ ownerId, status: { not: PropertyStatus.HIDDEN } });
  }

  async update(
    id: string,
    data: Prisma.PropertyUpdateInput,
  ): Promise<Property> {
    return this.prisma.property.update({
      where: { id },
      data,
      include: {
        owner: {
          select: {
            id: true,
            fullName: true,
          },
        },
      },
    });
  }

  async delete(id: string): Promise<Property> {
    return this.prisma.property.delete({
      where: { id },
    });
  }

  async incrementViewCount(id: string): Promise<void> {
    await this.prisma.property.update({
      where: { id },
      data: {
        viewCount: { increment: 1 },
        lastActivityAt: new Date(),
      },
    });
  }
}
