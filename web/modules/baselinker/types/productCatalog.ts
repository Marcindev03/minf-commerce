import { Status } from "./";

export interface Inventory {
  inventory_id: number;
  name: string;
  description: string;
  languages: string[];
  default_language: string;
  price_groups: number[];
  default_price_group: number;
  warehouses: string[];
  default_warehouse: string;
  reservations: boolean;
  is_default: boolean;
}

export interface InventoriesResponse {
  status: Status;
  inventories: Inventory[];
}

export interface ProductListItem {
  id: number;
  ean: string;
  sku: string;
  name: string;
  prices: {
    [key: string]: number;
  };
  stock: {
    [key: string]: number;
  };
}

export interface ProductListResponse {
  status: Status;
  products: {
    [key: string]: ProductListItem;
  };
}

export interface ProductData {
  is_bundle: boolean;
  ean: string;
  sku: string;
  tax_rate: number;
  weight: number;
  height: number;
  width: number;
  length: number;
  star: number;
  category_id: string;
  manufacturer_id: string;
  prices: {
    [key: string]: number;
  };
  stock: {
    [key: string]: number;
  };
  locations: {
    [key: string]: string;
  };
  text_fields: {
    name: string;
    description: string;
    description_extra1: string;
    description_extra2: string;
    features: {
      [key: string]: string;
    };
  };
  average_cost: number;
  average_landed_cost: number;
  images: {
    [key: string]: string;
  };
  links: {
    [key: string]: {
      product_id: number;
      variant_id: number;
    };
  };
  variants?: {
    [key: string]: {
      name: string;
      sku: string;
      ean: string;
      prices: {
        [key: string]: number;
      };
      stock: {
        [key: string]: number;
      };
      locations: {
        [key: string]: string;
      };
    };
  };
}

export interface ProductsDataResponse {
  status: Status;
  products: {
    [key: string]: ProductData;
  };
}
