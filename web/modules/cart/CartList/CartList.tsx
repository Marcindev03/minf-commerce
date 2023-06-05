"use client";
import { useCartProductsQuery } from "@modules/api/client";
import { FC, useEffect } from "react";
import { CartItem } from "../CartItem";
import { useCartContext } from "../CartContext";

type CartListProps = {};

export const CartList: FC<CartListProps> = () => {
  const { cartIds } = useCartContext();
  const { data, refetch } = useCartProductsQuery(cartIds);

  // TODO remove effect
  useEffect(() => {
    if (cartIds.length) {
      refetch();
    }
  }, [cartIds]);

  // const orderSum = useMemo(
  //   () => Array.from(productsSums.values()).reduce((acc, val) => acc + val, 0),
  //   [productsSums]
  // );

  return (
    <section className="mx-auto justify-center px-6 lg:py-10 lg:flex lg:justify-around">
      <article className="rounded-lg lg:w-3/5 lg:mr-6">
        {data?.data.map((product) => <CartItem product={product} />) ?? (
          <p className="text-lg text-center mt-20">Koszyk jest pusty</p>
        )}
      </article>
      {/* <article className="md:flex lg:flex-col lg:w-2/5">
        <section className="mb-6 md:mr-6 md:w-1/2 lg:w-full">
          <DeliveryForm />
        </section>
        <section className="md:w-1/2 lg:w-full">
          <CartSummary orderPrice={orderSum} deliveryPrice={15.99} />
        </section>
      </article> */}
    </section>
  );
};
