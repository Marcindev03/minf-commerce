"use client";
import {
  FC,
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useMemo,
} from "react";
import { useMap } from "usehooks-ts";
import { getCartItems, removeCartItem, setCartItem } from "../helpers";
import { CartContextValue, CartItem } from "../types";

const CartContext = createContext<CartContextValue>({
  cart: new Map(),
  cartIds: [],
  addToCart: () => {},
  changeProductQuantity: () => {},
  removeFromCart: () => {},
});
export const useCartContext = () => useContext(CartContext);

type CartContextProps = {
  children: ReactNode;
};

export const CartContextProvider: FC<CartContextProps> = ({ children }) => {
  const [cart, actions] = useMap<string, CartItem>(getCartItems());

  const addToCart = (item: CartItem) => {
    if (cart.get(item.productId)) {
      return;
    }

    actions.set(item.productId, item);
    setCartItem(item);
  };

  const changeProductQuantity = (item: CartItem) => {
    actions.set(item.productId, item);
    setCartItem(item);
  };

  const removeFromCart = useCallback((id: string) => {
    actions.remove(id);
    removeCartItem(id);
  }, []);

  const cartIds = useMemo(
    () => (cart.size ? Array.from(cart).flatMap(([id]) => id) : []),
    [cart]
  );

  const cartContextValue: CartContextValue = {
    cart,
    cartIds,
    addToCart,
    changeProductQuantity,
    removeFromCart,
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  );
};
