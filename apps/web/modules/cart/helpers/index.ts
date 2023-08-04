import { CartItem } from "../types";

export const removeCartItem = (id: number) =>
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

export const getCartItems = (): Map<number, CartItem> => {
  const jsonCart = global?.window?.localStorage.getItem("cart");

  // TODO add cart versioning
  // Prevent old cart structure to break applications
  try {
    const mapCart = jsonCart ? new Map(JSON.parse(jsonCart)) : new Map();

    return mapCart;
  } catch (err) {
    return new Map();
  }
};
