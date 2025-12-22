import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import * as dotenv from 'dotenv';

dotenv.config();

const prisma = new PrismaClient();

async function main() {
  const email = process.env.SUPERADMIN_EMAIL;
  const password = process.env.SUPERADMIN_PASSWORD;
  const phone = process.env.SUPERADMIN_PHONE || '+21600000000';
  const fullName = process.env.SUPERADMIN_NAME || 'Super Admin';
  const enabled = process.env.SUPERADMIN_ENABLED === 'true';

  if (!enabled) {
    console.log('⚠️  SUPERADMIN creation is disabled. Skipping...');
    return;
  }

  if (!email || !password) {
    throw new Error(
      '❌ Missing SUPERADMIN_EMAIL or SUPERADMIN_PASSWORD in .env',
    );
  }

  console.log('🔍 Checking for existing SuperAdmin...');

  const existing = await prisma.user.findFirst({
    where: { role: 'SUPERADMIN' },
  });

  if (existing) {
    console.log('✅ SuperAdmin already exists. Skipping creation.');
    return;
  }

  console.log('🔐 Creating initial SuperAdmin user...');

  const hashedPassword: string = await bcrypt.hash(password, 12);

  await prisma.user.create({
    data: {
      email,
      phone,
      passwordHash: hashedPassword,
      fullName,
      role: 'SUPERADMIN',
    },
  });

  console.log('🎉 SuperAdmin created successfully!');
  console.log(`   Email: ${email}`);
  console.log(`   Name: ${fullName}`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e: unknown) => {
    console.error(
      '❌ Seed failed:',
      e instanceof Error ? e.message : String(e),
    );
    await prisma.$disconnect();
    process.exit(1);
  });
