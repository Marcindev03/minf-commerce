"use client";
import { useProductsQuery } from "@modules/api/client";
import Link from "next/link";
import { FC, useEffect, useMemo, useState } from "react";
import { CartItem } from "../CartItem";
import { DeliveryForm } from "@modules/order/DeliveryForm";

type CartListProps = {};

// TODO refactor cart list
export const CartList: FC<CartListProps> = () => {
  const [productIds, setProductIds] = useState<string[]>([]);
  const [productsSums, setProductsSums] = useState(new Map<string, number>());

  const { data } = useProductsQuery("", productIds);

  useEffect(() => {
    const cartJson = localStorage.getItem("cart");

    const cart = (cartJson ? JSON.parse(cartJson) : []) as string[];

    setProductIds(cart);
  }, []);

  const handleQuanityChange = (name: string, sum: number) => {
    setProductsSums(new Map(productsSums.set(name, sum)));
  };

  const orderSum = useMemo(
    () => Array.from(productsSums.values()).reduce((acc, val) => acc + val, 0),
    [productsSums]
  );

  return (
    <section>
      <article className="w-full grid grid-cols-12 gap-4 bg-gray-50 px-6 py-4 border-b border-b-slate-300">
        <p className="col-span-2">Zdjęcie</p>
        <p className="col-span-4">Nazwa</p>
        <p className="col-span-2">Cena</p>
        <p className="col-span-1">Ilość</p>
        <p className="col-span-2">Suma</p>
      </article>
      {data?.data.map((product) => (
        <CartItem
          key={product.text_fields.name}
          product={product}
          onQuanityChange={handleQuanityChange}
        />
      ))}
      <div className="grid grid-cols-2">
        <article className="mt-8 col-span-1 col-start-2 shadow-md p-8">
          <h3 className="text-2xl">Podsumowanie zamówienia</h3>
          <p className="my-8">Kwota zamówienia: {orderSum} zł</p>

          <hr />

          <section className="mb-8">
            <DeliveryForm />
          </section>

          <section>
            <Link href="/cart/order">
              <button className="w-full py-4 bg-blue-500 text-white rounded">
                Przejdź dalej
              </button>
            </Link>
          </section>
        </article>
      </div>
    </section>
  );
};
