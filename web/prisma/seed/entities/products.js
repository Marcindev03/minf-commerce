const { faker } = require("@faker-js/faker");

const createProduct = (categoriesIds) => {
  const name = faker.commerce.productName();
  const price = parseFloat(faker.commerce.price());
  const quantity = faker.datatype.number(20);
  const imageUrl = faker.image.food(400, 600, true);
  const description = faker.commerce.productDescription();
  const categoryId =
    categoriesIds[Math.floor(Math.random() * categoriesIds.length)];

  return { name, price, quantity, imageUrl, description, categoryId };
};

const generateProducts = (n, categoriesIds) => {
  return Array.from({ length: n }, () => createProduct(categoriesIds));
};

const seedProducts = async (prisma, amount = 10, categoriesIds) => {
  await prisma.product.deleteMany({});

  const products = generateProducts(amount, categoriesIds);

  await prisma.product.createMany({ data: products });
};

module.exports = { seedProducts };
