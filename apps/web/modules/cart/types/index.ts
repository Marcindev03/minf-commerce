import { Product } from "@modules/api/types";
import { DB } from "@minf-commerce/database";

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
  deliveryMethod: DB.DeliveryMethod;
  isLoading: boolean;
  addToCart: (item: CartItem) => void;
  changeProductQuantity: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  setDeliveryMethod: (deliveryMethod: DB.DeliveryMethod) => void;
}
