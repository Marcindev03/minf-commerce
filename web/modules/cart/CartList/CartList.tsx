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
    <div className="bg-gray-100 p-20">
      <h1 className="mb-20 text-center text-2xl font-bold">Cart Items</h1>
      <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <div className="rounded-lg md:w-2/3">
          {data?.data.map((product) => (
            <CartItem product={product} onQuanityChange={handleQuanityChange} />
          ))}
        </div>
        <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
          <div className="mb-2 flex justify-between">
            <p className="text-gray-700">Subtotal</p>
            <p className="text-gray-700">$129.99</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-700">Shipping</p>
            <p className="text-gray-700">$4.99</p>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between">
            <p className="text-lg font-bold">Total</p>
            <div className="">
              <p className="mb-1 text-lg font-bold">$134.98 USD</p>
              <p className="text-sm text-gray-700">including VAT</p>
            </div>
          </div>
          <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
            Check out
          </button>
        </div>
      </div>
    </div>
  );
};
