export const SUPPORTED_METHODS = {
  FileVersion: "FileVersion",
  SupportedMethods: "SupportedMethods",
  ProductAdd: "ProductAdd",
  CategoryAdd: "CategoryAdd",
  // ProductsPriceUpdate: "ProductsPriceUpdate",
  // ProductsQuantityUpdate: "ProductsQuantityUpdate",
  // OrdersGet: "OrdersGet",
} as const;

export type SupportedMethods =
  (typeof SUPPORTED_METHODS)[keyof typeof SUPPORTED_METHODS];

export const SUPPORTED_METHODS_ARRAY = Array.from(
  Object.values(SUPPORTED_METHODS)
);

export const FILE_VERSION = {
  platform: "MinfCommerce",
  version: "4.1.19",
  standard: 4,
} as const;
