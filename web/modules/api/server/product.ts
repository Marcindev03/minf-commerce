import { getProducts as getBaselinkerProducs } from "@modules/baselinker";

export const getProducts = async () => {
  const baselinkerProducts = await getBaselinkerProducs();

  const products = Array.from(Object.entries(baselinkerProducts.products)).map(
    ([productId, product]) => ({
      ...product,
      product_id: productId,
      images: Array.from(Object.values(product.images)),
      prices: Array.from(Object.values(product.prices)),
    })
  );

  return products;
};

export const getProduct = async (productId: string) => {};
