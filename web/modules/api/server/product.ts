import {
  ProductData,
  getProducts as getBaselinkerProducs,
  getProduct as getBaselinkerProduct,
  getCategoryIdByName,
  GetProductsParams as getBaselinkerProducsParams,
} from "@modules/baselinker";

const transformProducts = (products: { [key: string]: ProductData }) =>
  Array.from(Object.entries(products)).map(([productId, product]) => ({
    ...product,
    product_id: productId,
    images: Array.from(Object.values(product.images)),
    prices: Array.from(Object.values(product.prices)),
    quantity: Object.values(product.stock)?.[0] ?? 0,
  }));

type GetProductsParams = {
  categoryName?: string;
  limit?: number;
  ids?: number[];
};

export const getProducts = async (params?: GetProductsParams) => {
  const getBaselinkerProducsParams = new Map<
    keyof getBaselinkerProducsParams,
    unknown
  >();

  if (params?.categoryName) {
    getBaselinkerProducsParams.set(
      "categoryId",
      await getCategoryIdByName(params.categoryName)
    );
  }

  if (params?.limit) {
    getBaselinkerProducsParams.set("limit", params.limit);
  }

  if (params?.ids?.length) {
    getBaselinkerProducsParams.set("productsIds", params.ids);
  }

  const baselinkerProducts = await getBaselinkerProducs(
    Object.fromEntries(getBaselinkerProducsParams)
  );

  const products = transformProducts(baselinkerProducts.products);

  return products;
};

export const getProduct = async (productId: number) => {
  const baselinkerProduct = await getBaselinkerProduct(productId);

  const product = transformProducts(baselinkerProduct)?.[0] ?? null;

  return product;
};
