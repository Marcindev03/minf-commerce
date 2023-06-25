import { Product } from "@modules/api/types";
import { DeliveryMethod } from "@minf-commerce/database";

export type CartDeliveryMethod = Omit<
  DeliveryMethod,
  "createdAt" | "updatedAt"
>;

export type CartItem = {
  productId: string;
  quantity: number;
};

export type CartContextItems = Omit<
  Map<string, CartItem>,
  "set" | "clear" | "delete"
>;

export interface CartContextValue {
  cart: CartContextItems;
  products: Product[];
  orderSum: number;
  deliveryMethod: CartDeliveryMethod;
  isLoading: boolean;
  addToCart: (item: CartItem) => void;
  changeProductQuantity: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  setDeliveryMethod: (deliveryMethod: CartDeliveryMethod) => void;
}
