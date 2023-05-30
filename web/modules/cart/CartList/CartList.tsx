"use client";
import { useCartProductsQuery } from "@modules/api/client";
import { FC, useCallback, useEffect, useMemo, useState } from "react";
import { CartItem } from "../CartItem";
import { getCartItems } from "../helpers";
import { DeliveryForm } from "@modules/order/DeliveryForm";
import Link from "next/link";

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

  const handleProductDelete = () => getCart();

  const orderSum = useMemo(
    () => Array.from(productsSums.values()).reduce((acc, val) => acc + val, 0),
    [productsSums]
  );

  return (
    <div className="bg-gray-100 p-20">
      <h1 className="mb-20 text-center text-2xl font-bold">Koszyk</h1>
      <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <div className="rounded-lg md:w-2/3">
          {data?.data.map((product) => (
            <CartItem
              product={product}
              onQuanityChange={handleQuanityChange}
              onProductDelete={handleProductDelete}
            />
          )) ?? <p className="text-xl text-center mt-20">Koszyk jest pusty</p>}
        </div>
        <article>
          <section className="mb-6">
            <DeliveryForm />
          </section>
          <div className="mt-6 rounded-lg border bg-white p-6 shadow-md md:mt-0 w-72">
            <div className="mb-2 flex justify-between">
              <p className="text-gray-700">Produkty</p>
              <p className="text-gray-700">{orderSum} PLN</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-700">Dostawa</p>
              <p className="text-gray-700">15.99 PLN</p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between">
              <p className="text-lg font-bold">Total</p>
              <div className="">
                <p className="mb-1 text-lg font-bold">{orderSum} PLN</p>
              </div>
            </div>
            <Link href="/cart/order">
              <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
                Przejdź dalej
              </button>
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
};
