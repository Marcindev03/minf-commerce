import { CartContextValue } from "@modules/cart";

export const EMPTY_DELIVERY_METHOD = {
  id: 0,
  name: "",
  price: 0,
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
