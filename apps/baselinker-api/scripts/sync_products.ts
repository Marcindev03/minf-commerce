import "dotenv/config";
import { Prisma, deleteProducts, saveProduct } from "@minf-commerce/database";
import { getProducts } from "@minf-commerce/core";

console.log("Product syncing....");

const app = async () => {
  await deleteProducts();

  const baselinkerProducts = await getProducts();

  const localProducts: Prisma.ProductCreateInput[] = baselinkerProducts.map(
    (product) => ({
      baselinkerProductId: product.product_id.toString(),
      sku: product.sku,
      ean: product.ean,
      name: product.text_fields.name,
      quantity: product.quantity,
      price: product.prices[0],
      tax: product.tax_rate,
      weight: product.weight,
      height: product.height,
      length: product.length,
      width: product.width,
      description: product.text_fields.description ?? "",
      manName: "",
      baselinkerCategoryId: product.category_id.toString(),
      features: product.text_fields.features ?? {},
      category: {
        connect: {
          baselinkerCategoryId: +product.category_id,
        },
      },
    })
  );

  await Promise.all(localProducts.map((product) => saveProduct(product)));
};

app()
  .then(() => {
    console.log("Product syncing done....");
  })
  .catch((err) => {
    console.log(err);
    console.log("Product syncing error !");
  });
