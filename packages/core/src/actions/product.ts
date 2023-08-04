import {
  ProductData,
  getProducts as getBaselinkerProducs,
  getCategoryIdByName,
  GetProductsParams as getBaselinkerProducsParams,
} from "@minf-commerce/baselinker";
import {
  getProducts as getDBProducts,
  getProduct as getDBProduct,
} from "@minf-commerce/database";

const transformProducts = (products: { [key: string]: ProductData }) =>
  Array.from(Object.entries(products)).map(([productId, product]) => ({
    ...product,
    product_id: productId,
    images: Array.from(Object.values(product.images)),
    prices: Array.from(Object.values(product.prices)),
    quantity: Object.values(product.stock)?.[0] ?? 0,
  }));

type GetProductsParams = {
  category?: string;
  limit?: number;
  ids?: number[];
};

export const getProducts = async (params?: GetProductsParams) => {
  const getBaselinkerProducsParams = new Map<
    keyof getBaselinkerProducsParams,
    unknown
  >();

  if (params?.category) {
    getBaselinkerProducsParams.set(
      "categoryId",
      await getCategoryIdByName(params.category)
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

  const dbProducts = await getDBProducts();

  return {
    products,
    dbProducts,
  };
};

export const getProduct = async (productId: number) => {
  const product = await getDBProduct(productId);

  return product;
};
