"use client";
import { useCartProductsQuery } from "@modules/api/client";
import { FC, useCallback, useEffect, useMemo, useState } from "react";
import { CartItem } from "../CartItem";
import { getCartItems } from "../helpers";
import { DeliveryForm } from "@modules/order/DeliveryForm";
import { CartSummary } from "../CartSummary";

type CartListProps = {};

// TODO refactor cart list
export const CartList: FC<CartListProps> = () => {
  const [cart, setProductIds] = useState<string[]>([]);
  const [productsSums, setProductsSums] = useState(new Map<string, number>());

  const { data, refetch } = useCartProductsQuery(cart);

  useEffect(() => {
    getCart();
  }, []);

  useEffect(() => {
    if (cart.length) {
      refetch();
    }
  }, [cart]);

  const getCart = useCallback(() => setProductIds(getCartItems()), []);

  const handleQuanityChange = (name: string, sum: number) => {
    setProductsSums(new Map(productsSums.set(name, sum)));
  };

  // TODO change logic of product delete
  const handleProductDelete = () => getCart();

  const orderSum = useMemo(
    () => Array.from(productsSums.values()).reduce((acc, val) => acc + val, 0),
    [productsSums]
  );

  return (
    <section className="mx-auto justify-center px-6 lg:py-10 lg:flex lg:justify-around">
      <article className="rounded-lg lg:w-3/5 lg:mr-6">
        {data?.data.map((product) => (
          <CartItem
            product={product}
            onQuanityChange={handleQuanityChange}
            onProductDelete={handleProductDelete}
          />
        )) ?? <p className="text-lg text-center mt-20">Koszyk jest pusty</p>}
      </article>
      <article className="md:flex lg:flex-col lg:w-2/5">
        <section className="mb-6 md:mr-6 md:w-1/2 lg:w-full">
          <DeliveryForm />
        </section>
        <section className="md:w-1/2 lg:w-full">
          <CartSummary orderPrice={orderSum} deliveryPrice={15.99} />
        </section>
      </article>
    </section>
  );
};
