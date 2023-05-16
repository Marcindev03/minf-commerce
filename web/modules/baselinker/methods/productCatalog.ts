import { baselinkerClient } from "../client";
import {
  CategoriesResponse,
  InventoriesResponse,
  ProductListResponse,
  ProductsDataResponse,
} from "../types";

export const getInventories = async () =>
  await baselinkerClient<InventoriesResponse>("getInventories");

export type GetInventoryProductsListParams = {
  categoryId?: string;
};

export const getInventoryProductsList = async (
  inventoryId: number,
  params?: GetInventoryProductsListParams
) =>
  await baselinkerClient<ProductListResponse>("getInventoryProductsList", {
    inventory_id: inventoryId,
    filter_category_id: params?.categoryId,
  });

export const getInventoryProductsData = async (
  inventoryId: number,
  productsIds: string[]
) =>
  await baselinkerClient<ProductsDataResponse>("getInventoryProductsData", {
    inventory_id: inventoryId,
    products: productsIds,
  });

export const getInventoryCategories = async (inventoryId: number) =>
  await baselinkerClient<CategoriesResponse>("getInventoryCategories", {
    inventory_id: inventoryId,
  });

export const getMainInventoryId = async () => {
  const { inventories } = await getInventories();
  return inventories[0].inventory_id;
};

export type GetProductsParams = {
  categoryId?: string;
};

export const getProducts = async (params?: GetProductsParams) => {
  const inventoryId = await getMainInventoryId();

  const { products } = await getInventoryProductsList(inventoryId, params);
  const productsIds = Array.from(Object.keys(products));

  const data = await getInventoryProductsData(inventoryId, productsIds);

  return data;
};

export const getProduct = async (productId: string) => {
  const inventoryId = await getMainInventoryId();

  const { products } = await getInventoryProductsData(inventoryId, [productId]);

  return products;
};

export const getCategories = async () => {
  const inventoryId = await getMainInventoryId();

  const { categories } = await getInventoryCategories(inventoryId);

  return categories;
};

export const getCategoryIdByName = async (categoryName: string) => {
  const categories = await getCategories();

  return categories.find(({ name }) => name === categoryName)?.category_id;
};
