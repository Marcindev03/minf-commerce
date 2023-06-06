"use client";
import { useCartProductsQuery } from "@modules/api/client";
import { FC, useEffect, useMemo } from "react";
import { CartItem } from "../CartItem";
import { useCartContext } from "../CartContext";
import { DeliveryForm } from "@modules/order";
import { CartSummary } from "../CartSummary";
import Link from "next/link";

type CartListProps = {};

export const CartList: FC<CartListProps> = () => {
  const { cartIds, cart } = useCartContext();
  const { data, refetch } = useCartProductsQuery(cartIds);

  // TODO remove effect
  useEffect(() => {
    if (cartIds.length) {
      refetch();
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

  return (
    <section className="mx-auto justify-center px-6 lg:py-10 lg:flex lg:justify-around">
      <article className="rounded-lg lg:w-3/5 lg:mr-6">
        {data?.data.map((product) => <CartItem product={product} />) ?? (
          <p className="text-lg text-center py-10">
            Koszyk jest pusty. <br />
            <Link href="/products" className="underline">
              Dodaj produkty do koszyka
            </Link>
          </p>
        )}
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
