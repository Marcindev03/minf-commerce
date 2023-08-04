"use client";
import {
  FC,
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useMap } from "usehooks-ts";
import { getCartItems, removeCartItem, setCartItem } from "../helpers";
import { CartContextValue, CartItem } from "../types";
import { useCartProductsQuery } from "@modules/api/client";
import { EMPTY_CART_CONTEXT, EMPTY_DELIVERY_METHOD } from "@modules/mocks";
import { DB } from "@minf-commerce/database";

const CartContext = createContext<CartContextValue>(EMPTY_CART_CONTEXT);
export const useCartContext = () => useContext(CartContext);

type CartContextProps = {
  children: ReactNode;
};

export const CartContextProvider: FC<CartContextProps> = ({ children }) => {
  const [deliveryMethod, setDeliveryMethod] = useState<DB.DeliveryMethod>(
    EMPTY_DELIVERY_METHOD
  );
  const [cart, actions] = useMap<number, CartItem>(getCartItems());

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

  const removeFromCart = useCallback((id: number) => {
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
        .map(({ id, price }) => {
          const quantity = cart.get(id)?.quantity ?? 1;
          return price * quantity;
        })
        .reduce((acc, value) => acc + value, 0) ?? 0,
    [cart, data]
  );

  const cartContextValue: CartContextValue = {
    cart,
    products: data?.data ?? [],
    orderSum,
    deliveryMethod,
    isLoading,
    addToCart,
    changeProductQuantity,
    removeFromCart,
    setDeliveryMethod,
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  );
};
