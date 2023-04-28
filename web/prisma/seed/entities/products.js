const { faker } = require("@faker-js/faker");

const createProduct = () => {
  const name = faker.commerce.productName();
  const price = parseFloat(faker.commerce.price());
  const quantity = faker.datatype.number(20);
  const imageUrl = faker.image.imageUrl();
  const description = faker.commerce.productDescription();

  return { name, price, quantity, imageUrl, description };
};

const generateProducts = (n) => {
  return Array.from({ length: n }, () => createProduct());
};

const seedProducts = async (prisma, amount = 10) => {
  await prisma.product.deleteMany({});

  const products = generateProducts(amount);

  await prisma.product.createMany({ data: products });
};

module.exports = { seedProducts };
