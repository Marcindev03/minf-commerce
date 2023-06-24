export type ProductFeature = [string, string];

export type ProductParams = {
  product_id: string;
  sku: string;
  ean: string;
  name: string;
  quantity: string;
  price: string;
  tax: string;
  weight: string;
  height: string;
  length: string;
  width: string;
  description: string;
  description_extra1: string;
  description_extra2: string;
  description_extra3: string;
  description_extra4: string;
  man_name: string;
  category_id: string;
  images: string[];
  features: ProductFeature[];
};
