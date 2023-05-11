export interface Product {
  is_bundle: boolean;
  ean: string;
  sku: string;
  tax_rate: number;
  weight: number;
  height: number;
  width: number;
  length: number;
  star: number;
  category_id: number;
  manufacturer_id: number;
  text_fields: {
    name: string;
    description: string;
  };
  stock: {
    [key: string]: number;
  };
  prices: number[];
  locations: {
    [key: string]: string;
  };
  links: Record<string, never>;
  average_cost: number;
  average_landed_cost: number;
  images: string[];
  product_id: string;
  quantity: number;
}
