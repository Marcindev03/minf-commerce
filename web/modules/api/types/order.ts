type DeliveryInfo = {
  method: string;
  price: string;
  company: string;
  address: string;
  city: string;
  state: string;
  postcode: string;
};

type OrderProduct = {
  storage: string;
  storageId: number;
  productId: string;
  variantId: number;
  location: string;
  name: string;
  sku: string;
  ean: string;
  priceBrutto: number;
  taxRate: number;
  quantity: number;
  weight: number;
};

export type Order = {
  phone: string;
  email: string;
  firstName: string;
  lastName: string;
  delivery: DeliveryInfo;
  products: OrderProduct[];
};
