"use client";
import { FC } from "react";
import dynamic from "next/dynamic";
import { DeliveryForm } from "@modules/order";
import { CartSummary } from "../CartSummary";
import { CartLoading } from "../CartLoading";

const DynamiCartList = dynamic(
  () => import("@modules/cart").then((mod) => mod.CartList),
  {
    ssr: false,
    loading: () => <CartLoading className="lg:w-3/5" />,
  }
);

type CartViewProps = {};

export const CartView: FC<CartViewProps> = () => {
  return (
    <section className="mx-auto justify-center px-6 lg:py-10 lg:flex lg:justify-around">
      <DynamiCartList />
      <article className="md:flex lg:flex-col lg:w-2/5">
        <section className="mb-6 md:mr-6 md:w-1/2 lg:w-full">
          <DeliveryForm />
        </section>
        <section className="md:w-1/2 lg:w-full">
          <CartSummary />
        </section>
      </article>
    </section>
  );
};
