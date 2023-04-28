const { PrismaClient } = require("@prisma/client");
const { seedProducts } = require("./entities/products");

const prisma = new PrismaClient();

const seed = async () => {
  const promises = [seedProducts(prisma, 50)];

  try {
    await Promise.all(promises);
  } catch (err) {
    console.log("Seeding Error", err);
  } finally {
    prisma.$disconnect();
  }
};

seed();
