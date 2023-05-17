export { CartList } from "./CartList";
export { CartItem } from "./CartItem";

export const addItemToCart = (productId: string) => {
  const cart = getCartItems();

  if (cart.includes(productId)) {
    return;
  }

  cart.push(productId);

  saveCartInLocalStorage(cart);
};

export const removeCartItem = (productId: string) => {
  const cart = getCartItems();

  const productIndex = cart.findIndex((id) => productId === id);
  cart.splice(productIndex - 1, productIndex);

  console.debug(cart);

  saveCartInLocalStorage(cart);
};

const saveCartInLocalStorage = (cart: string[]) =>
  localStorage.setItem("cart", JSON.stringify(cart));

export const getCartItems = () => {
  const cartJson = localStorage.getItem("cart");

  const cart = (cartJson ? JSON.parse(cartJson) : []) as string[];

  return cart;
};
