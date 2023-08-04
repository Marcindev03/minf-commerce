import { DB } from "@minf-commerce/database";
import { CartContextValue } from "@modules/cart";

export const EMPTY_DELIVERY_METHOD: DB.DeliveryMethod = {
  id: 0,
  name: "",
  price: 0,
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const EMPTY_CART_CONTEXT: CartContextValue = {
  cart: new Map(),
  addToCart: () => {},
  changeProductQuantity: () => {},
  removeFromCart: () => {},
  products: [],
  orderSum: 0,
  deliveryMethod: EMPTY_DELIVERY_METHOD,
  isLoading: true,
  setDeliveryMethod: () => {},
};
