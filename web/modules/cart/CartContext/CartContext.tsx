"use client";
import {
  FC,
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
} from "react";
import { useMap } from "usehooks-ts";
import { getCartItems, removeCartItem, setCartItem } from "../helpers";
import { CartContextValue, CartItem } from "../types";
import { useCartProductsQuery } from "@modules/api/client";

const CartContext = createContext<CartContextValue>({
  cart: new Map(),
  addToCart: () => {},
  changeProductQuantity: () => {},
  removeFromCart: () => {},
  products: [],
  orderSum: 0,
  isLoading: true,
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

  const { data, refetch, isLoading } = useCartProductsQuery(cartIds);

  useEffect(() => {
    if (cartIds.length) {
      refetch({});
    }
  }, [cartIds]);

  const orderSum = useMemo(
    () =>
      data?.data
        .map(({ product_id, prices }) => {
          const quantity = cart.get(product_id)?.quantity ?? 1;
          return prices[0] * quantity;
        })
        .reduce((acc, value) => acc + value, 0) ?? 0,
    [cart]
  );

  const cartContextValue: CartContextValue = {
    cart,
    products: data?.data ?? [],
    orderSum,
    isLoading,
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
