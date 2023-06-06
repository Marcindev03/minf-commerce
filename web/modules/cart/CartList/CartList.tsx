"use client";
import { FC } from "react";
import { CartItem } from "../CartItem";
import { useCartContext } from "../CartContext";
import Link from "next/link";
import { CartLoading } from "../CartLoading";

type CartListProps = {};

export const CartList: FC<CartListProps> = () => {
  const { cart, products, isLoading } = useCartContext();

  return (
    <article className="rounded-lg lg:w-3/5 lg:mr-6">
      {isLoading ? (
        cart.size ? (
          <CartLoading className="h-full" />
        ) : (
          <p className="text-lg text-center py-10">
            Koszyk jest pusty. <br />
            <Link href="/products" className="underline">
              Dodaj produkty do koszyka
            </Link>
          </p>
        )
      ) : (
        <>
          {products.map((product) => (
            <CartItem product={product} />
          ))}
        </>
      )}
    </article>
  );
};
