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
  cartIds: string[];
  addToCart: (item: CartItem) => void;
  changeProductQuantity: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
}
