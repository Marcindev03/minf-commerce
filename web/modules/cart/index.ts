export { CartList } from "./CartList";
export { CartItem } from "./CartItem";

export const addItemToCart = (productId: string) => {
  const cart = getCartItems();

  if (cart.includes(productId)) {
    return;
  }

  cart.push(productId);

  localStorage.setItem("cart", JSON.stringify(cart));
};

export const getCartItems = () => {
  const cartJson = localStorage.getItem("cart");

  const cart = (cartJson ? JSON.parse(cartJson) : []) as string[];

  return cart;
};
