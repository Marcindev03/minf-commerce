import { Status } from "./index";

type Invoice = {
  invoice_fullname: string;
  invoice_company: string;
  invoice_nip: string;
  invoice_address: string;
  invoice_city: string;
  invoice_state: string;
  invoice_postcode: string;
  invoice_country_code: string;
  want_invoice: "1" | "0";
};

type Delivery = {
  delivery_method: string;
  delivery_price: string;
  delivery_fullname: string;
  delivery_company?: string;
  delivery_address: string;
  delivery_city: string;
  delivery_state: string;
  delivery_postcode: string;
  delivery_country_code: string;
};

type DeliveryInput = {
  delivery_point_id: string;
  delivery_point_name: string;
  delivery_point_address: string;
  delivery_point_postcode: string;
  delivery_point_city: string;
} & Delivery;

export type Order = {
  phone: string;
  email: string;
  products: Product[];
} & Delivery;

export type OrderInput = {
  order_status_id: string;
  custom_source_id: string;
  date_add: string;
  user_comments: string;
  admin_comments: string;
  user_login: string;
  currency: string;
  payment_method: string;
  payment_method_cod: string;
  paid: "1" | "0";
  extra_field_1: string;
  extra_field_2: string;
  custom_extra_fields: Record<string, string>;
} & Order &
  DeliveryInput &
  Invoice;

export type Product = {
  storage?: string;
  storage_id?: number;
  product_id: string;
  variant_id?: number;
  location?: string;
  name?: string;
  sku?: string;
  ean?: string;
  price_brutto?: number;
  tax_rate?: number;
  quantity: number;
  weight?: number;
};

export type OrderStatusReponse = {
  status: Status;
  statuses: OrderStatus[];
};

export type OrderStatus = {
  id: number;
  name: string;
  name_for_customer: string;
};

export type AddOrderResponse = {
  status: Status;
  order_id: string;
};
