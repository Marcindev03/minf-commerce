const { PrismaClient } = require("@prisma/client");
const { seedProducts } = require("./entities/products");
const { seedCategories } = require("./entities/category");

const prisma = new PrismaClient();

const seed = async () => {
  try {
    const categoriesIds = await seedCategories(prisma, 6);

    await seedProducts(prisma, 50, categoriesIds);
  } catch (err) {
    console.log("Seeding Error", err);
  } finally {
    prisma.$disconnect();
  }
};

seed();
