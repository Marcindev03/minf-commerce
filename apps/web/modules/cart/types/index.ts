import { DB } from "@minf-commerce/database";
import { Schema } from "@minf-commerce/core";

export type CartItem = {
  productId: number;
  quantity: number;
};

export type CartContextItems = Omit<
  Map<number, CartItem>,
  "set" | "clear" | "delete"
>;

export interface CartContextValue {
  cart: CartContextItems;
  products: Schema.ProductSchemaType[];
  orderSum: number;
  deliveryMethod: DB.DeliveryMethod;
  isLoading: boolean;
  addToCart: (item: CartItem) => void;
  changeProductQuantity: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  setDeliveryMethod: (deliveryMethod: DB.DeliveryMethod) => void;
}
