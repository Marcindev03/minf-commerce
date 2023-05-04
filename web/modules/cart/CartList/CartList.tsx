"use client";
import { useProductsQuery } from "@modules/api";
import { CustomNextImage } from "@modules/common";
import Link from "next/link";
import { FC, useEffect, useState } from "react";

type CartListProps = {};

export const CartList: FC<CartListProps> = () => {
  const [productIds, setProductIds] = useState<string[]>([]);
  const { data } = useProductsQuery("", productIds);

  useEffect(() => {
    const cartJson = localStorage.getItem("cart");

    const cart = (cartJson ? JSON.parse(cartJson) : []) as string[];

    setProductIds(cart);
  }, []);

  return (
    <section>
      <article className="w-full grid grid-cols-12 gap-4 bg-gray-50 px-6 py-4 border-b border-b-slate-300">
        <p>Lp.</p>
        <p className="col-span-2">Zdjęcie</p>
        <p className="col-span-4">Nazwa</p>
        <p className="col-span-2">Cena</p>
        <p className="col-span-1">Ilość</p>
        <p className="col-span-2">Suma</p>
      </article>
      {data?.data.map((product, i) => (
        <article className="w-full grid grid-cols-12 gap-4 px-6 py-4 border-b border-b-slate-300">
          <p>{i}</p>
          <section className="relative col-span-2 h-20">
            <CustomNextImage src={product.imageUrl} fill alt={product.name} />
          </section>
          <p className="col-span-4">{product.name}</p>
          <p className="col-span-2">{product.price} zł</p>
          <input type="number" />
          <p className="col-span-2">loremipsum zł</p>
        </article>
      ))}
      <div className="grid grid-cols-2">
        <article className="mt-8 col-span-1 col-start-2">
          <h3 className="text-2xl">Podsumowanie zamówienia</h3>
          <p className="my-8">Kwota zamówienia: 0000 zł</p>

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
