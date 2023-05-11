import { baselinkerClient } from "../client";
import {
  InventoriesResponse,
  ProductListResponse,
  ProductsDataResponse,
} from "../types";

export const getInventories = async () =>
  await baselinkerClient<InventoriesResponse>("getInventories");

export const getInventoryProductsList = async (inventoryId: number) =>
  await baselinkerClient<ProductListResponse>("getInventoryProductsList", {
    inventory_id: inventoryId,
  });

export const getInventoryProductsData = async (
  inventoryId: number,
  productsIds: string[]
) =>
  await baselinkerClient<ProductsDataResponse>("getInventoryProductsData", {
    inventory_id: inventoryId,
    products: productsIds,
  });

export const getMainInventoryId = async () => {
  const { inventories } = await getInventories();
  return inventories[0].inventory_id;
};

export const getProducts = async () => {
  const inventoryId = await getMainInventoryId();

  const { products } = await getInventoryProductsList(inventoryId);
  const productsIds = Array.from(Object.keys(products));

  const data = await getInventoryProductsData(inventoryId, productsIds);

  return data;
};

export const getProduct = async (productId: string) => {
  const inventoryId = await getMainInventoryId();

  const { products } = await getInventoryProductsData(inventoryId, [productId]);

  return products;
};
