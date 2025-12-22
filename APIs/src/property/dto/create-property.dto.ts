import {
  IsString,
  IsNotEmpty,
  IsEnum,
  IsNumber,
  IsBoolean,
  IsOptional,
  IsDateString,
  Min,
  MaxLength,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  PropertyType,
  PropertyCategory,
  PricePeriod,
  ListedBy,
} from '@prisma/client';
import { Sanitize } from '../../common/decorators/sanitize.decorator';

export class CreatePropertyDto {
  @ApiProperty({ example: 'Beautiful 3BR Apartment', maxLength: 100 })
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  @Sanitize()
  title: string;

  @ApiProperty({
    example: 'Spacious apartment with modern amenities',
    maxLength: 5000,
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(5000)
  @Sanitize()
  description: string;

  @ApiProperty({ enum: PropertyType, example: PropertyType.RESIDENTIAL })
  @IsEnum(PropertyType)
  propertyType: PropertyType;

  @ApiProperty({ enum: PropertyCategory, example: PropertyCategory.APARTMENT })
  @IsEnum(PropertyCategory)
  category: PropertyCategory;

  @ApiProperty({ example: '123 Main Street' })
  @IsString()
  @IsNotEmpty()
  address: string;

  @ApiProperty({ example: 'Tunis' })
  @IsString()
  @IsNotEmpty()
  city: string;

  @ApiProperty({ example: 'Ariana' })
  @IsString()
  @IsNotEmpty()
  region: string;

  @ApiPropertyOptional({ example: 36.8065 })
  @IsNumber()
  @IsOptional()
  latitude?: number;

  @ApiPropertyOptional({ example: 10.1815 })
  @IsNumber()
  @IsOptional()
  longitude?: number;

  @ApiProperty({ example: 1200, minimum: 0 })
  @IsNumber()
  @Min(0)
  price: number;

  @ApiProperty({ enum: PricePeriod, example: PricePeriod.MONTH })
  @IsEnum(PricePeriod)
  pricePeriod: PricePeriod;

  @ApiPropertyOptional({ example: true })
  @IsBoolean()
  @IsOptional()
  isNegotiable?: boolean;

  @ApiProperty({ example: 120, minimum: 0 })
  @IsNumber()
  @Min(0)
  sizeSqm: number;

  @ApiPropertyOptional({ example: 3, minimum: 0 })
  @IsNumber()
  @IsOptional()
  @Min(0)
  bedrooms?: number;

  @ApiPropertyOptional({ example: 2, minimum: 0 })
  @IsNumber()
  @IsOptional()
  @Min(0)
  bathrooms?: number;

  @ApiPropertyOptional({ example: '2024-02-01T00:00:00Z' })
  @IsDateString()
  @IsOptional()
  availabilityDate?: string;

  @ApiProperty({ enum: ListedBy, example: ListedBy.OWNER })
  @IsEnum(ListedBy)
  listedBy: ListedBy;
}
