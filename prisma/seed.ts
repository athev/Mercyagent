import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding Vibework partner organizations...");

  // Create ELIVE organization
  const elive = await prisma.organization.upsert({
    where: { slug: "elive" },
    update: {},
    create: {
      name: "ELIVE Academy",
      slug: "elive",
      logoText: "ELIVE",
      primaryColor: "#1a56db",
      secondaryColor: "#0e9f6e",
      accentColor: "#1e429f",
      website: "https://elive.edu.vn",
      address: "Hà Nội, Việt Nam",
      phone: "+84 xxx xxx xxx",
      email: "contact@elive.edu.vn",
      isVerified: true,
    },
  });
  console.log("✅ Created org:", elive.name);

  // Create a demo trainer for development
  const demoEmail = "trainer@vibework.vn";
  const demoUser = await prisma.user.upsert({
    where: { email: demoEmail },
    update: {},
    create: {
      email: demoEmail,
      name: "Trainer Demo",
      image: `https://api.dicebear.com/7.x/avataaars/svg?seed=${demoEmail}`,
    },
  });

  await prisma.trainerMembership.upsert({
    where: { userId_organizationId: { userId: demoUser.id, organizationId: elive.id } },
    update: {},
    create: {
      userId: demoUser.id,
      organizationId: elive.id,
      role: "trainer",
      isApproved: true,
    },
  });
  console.log("✅ Demo User Created:", demoEmail);
  console.log("✅ Linked Demo User → ELIVE Academy");

  console.log("🎉 Seed complete.");
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(() => prisma.$disconnect());
