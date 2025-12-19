# Prisma Setup Guide - PropConnect Backend

## ✅ What's Been Set Up

1. **Prisma installed** - `@prisma/client` and `prisma` packages
2. **Schema created** - Complete database schema in `prisma/schema.prisma`
3. **Environment variables** - `.env` and `.env.example` files
4. **Prisma module** - NestJS integration in `src/prisma/`
5. **Upload directory** - `uploads/properties/` for images

---

## 📋 Next Steps

### 1. Install PostgreSQL (if not installed)

**Windows:**
- Download from: https://www.postgresql.org/download/windows/
- Or use Docker: `docker run --name postgres -e POSTGRES_PASSWORD=password -p 5432:5432 -d postgres`

**Check if running:**
```bash
psql --version
```

### 2. Create Database

```bash
# Connect to PostgreSQL
psql -U postgres

# Create database
CREATE DATABASE propconnect;

# Exit
\q
```

### 3. Update .env File

Edit `.env` and update the DATABASE_URL with your credentials:
```env
DATABASE_URL="postgresql://YOUR_USERNAME:YOUR_PASSWORD@localhost:5432/propconnect?schema=public"
```

### 4. Generate Prisma Client

```bash
npx prisma generate
```

This creates the TypeScript types for your database models.

### 5. Run First Migration

```bash
npx prisma migrate dev --name init
```

This will:
- Create all tables in your database
- Generate migration files in `prisma/migrations/`
- Update Prisma Client

### 6. (Optional) Seed Database with Test Data

Create `prisma/seed.ts`:
```typescript
import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  // Create test user
  const hashedPassword = await bcrypt.hash('password123', 10);
  
  const user = await prisma.user.create({
    data: {
      email: 'test@example.com',
      phone: '+21612345678',
      passwordHash: hashedPassword,
      fullName: 'Test User',
    },
  });

  console.log('Created user:', user);

  // Create amenities
  const amenities = await prisma.amenity.createMany({
    data: [
      { nameAr: 'تكييف', nameEn: 'Air Conditioning', category: 'RESIDENTIAL' },
      { nameAr: 'موقف سيارات', nameEn: 'Parking', category: 'GENERAL' },
      { nameAr: 'مصعد', nameEn: 'Elevator', category: 'RESIDENTIAL' },
      { nameAr: 'واجهة زجاجية', nameEn: 'Storefront', category: 'COMMERCIAL' },
    ],
  });

  console.log('Created amenities:', amenities);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
```

Run seed:
```bash
npx prisma db seed
```

---

## 🔧 Useful Prisma Commands

```bash
# Generate Prisma Client (after schema changes)
npx prisma generate

# Create and apply migration
npx prisma migrate dev --name migration_name

# Apply migrations in production
npx prisma migrate deploy

# Open Prisma Studio (database GUI)
npx prisma studio

# Reset database (WARNING: deletes all data)
npx prisma migrate reset

# Format schema file
npx prisma format

# Validate schema
npx prisma validate

# Pull schema from existing database
npx prisma db pull

# Push schema without migrations (dev only)
npx prisma db push
```

---

## 📊 Database Schema Overview

### Core Models:
- **User** - User accounts (tenants, owners, admins)
- **Property** - Property listings
- **PropertyImage** - Property photos (2-6 per property)
- **Amenity** - Available amenities
- **PropertyAmenity** - Link properties to amenities
- **Message** - In-app messaging
- **Favorite** - User's saved properties
- **SavedSearch** - Saved search criteria with alerts
- **Report** - User/property reports
- **DuplicateAlert** - Flagged duplicate listings
- **BlockedUser** - User blocking system

### Enums:
- PropertyType: RESIDENTIAL, COMMERCIAL, MIXED
- PropertyCategory: HOUSE, APARTMENT, OFFICE, SHOP, LAND
- PricePeriod: MONTH, YEAR, DAY
- PropertyStatus: AVAILABLE, RENTED, HIDDEN
- ListedBy: OWNER, ON_BEHALF

---

## 🔗 Using Prisma in NestJS

### Import PrismaService in any module:

```typescript
import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { UsersService } from './users.service';

@Module({
  imports: [PrismaModule],
  providers: [UsersService],
})
export class UsersModule {}
```

### Use in service:

```typescript
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.user.findMany();
  }

  async findOne(id: string) {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  async create(data: any) {
    return this.prisma.user.create({ data });
  }
}
```

---

## 🚨 Important Notes

1. **Never commit .env** - Already in .gitignore
2. **Backup before migrations** - In production
3. **Use transactions** - For complex operations
4. **Index optimization** - Already added for common queries
5. **Soft deletes** - Consider for Property model

---

## 📚 Resources

- Prisma Docs: https://www.prisma.io/docs
- NestJS + Prisma: https://docs.nestjs.com/recipes/prisma
- Prisma Studio: `npx prisma studio`

---

## ✅ Verification Checklist

- [ ] PostgreSQL installed and running
- [ ] Database created
- [ ] .env configured with correct DATABASE_URL
- [ ] `npx prisma generate` completed
- [ ] `npx prisma migrate dev` completed
- [ ] Prisma Studio opens: `npx prisma studio`
- [ ] PrismaModule imported in app.module.ts

---

**Status:** Ready for development! 🚀
