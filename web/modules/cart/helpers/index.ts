import { CartItem } from "../types";

export const removeCartItem = (id: string) =>
  saveCart((cart) => {
    cart.delete(id);
    return cart;
  });

export const setCartItem = (item: CartItem) =>
  saveCart((cart) => {
    cart.set(item.productId, item);
    return cart;
  });

const saveCart = (
  callback: (
    cart: ReturnType<typeof getCartItems>
  ) => ReturnType<typeof getCartItems>
) => {
  const cart = getCartItems();
  const updatedCart = callback(cart);
  global?.window?.localStorage.setItem(
    "cart",
    JSON.stringify(Array.from(updatedCart.entries()))
  );
};

export const getCartItems = (): Map<string, CartItem> => {
  const jsonCart = global?.window?.localStorage.getItem("cart");

  return jsonCart ? new Map(JSON.parse(jsonCart)) : new Map();
};
