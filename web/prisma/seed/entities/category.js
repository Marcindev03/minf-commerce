const { faker } = require("@faker-js/faker");

const createCategory = () => {
  const name = faker.commerce.productAdjective();

  return { name };
};

const generateCategories = (n) => {
  return Array.from({ length: n }, () => createCategory());
};

const seedCategories = async (prisma, amount = 10) => {
  await prisma.category.deleteMany({});

  const categories = generateCategories(amount);

  const newCategories = await Promise.all(
    categories.map(
      async (category) =>
        await prisma.category.create({
          data: category,
        })
    )
  );

  const categoriesIds = newCategories.map(({ id }) => id);

  return categoriesIds;
};

module.exports = { seedCategories };
