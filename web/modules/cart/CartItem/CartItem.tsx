"use client";
import { Product } from "@modules/api/types";
import Link from "next/link";
import { FC, useEffect, useState } from "react";

type CartItemProps = {
  product: Product;
  onQuanityChange?: (name: string, sum: number) => void;
};

export const CartItem: FC<CartItemProps> = ({
  product: {
    product_id,
    text_fields: { name },
    prices: [price],
    images: [imageUrl],
  },
  onQuanityChange,
}) => {
  const [amount, setAmount] = useState(1);

  // TODO remove useEffect
  useEffect(() => {
    onQuanityChange?.(name, price);
  }, []);

  const handleQuanityChange = (value: number) => {
    const valueToSet = value > 0 ? value : amount;

    setAmount(valueToSet);
    onQuanityChange?.(name, valueToSet * price);
  };

  return (
    <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
      <Link href={`/product/${product_id}`}>
        <img src={imageUrl} alt={name} className="w-full rounded-lg sm:w-40" />
      </Link>
      <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
        <div className="mt-5 sm:mt-0">
          <Link href={`/product/${product_id}`}>
            <h2 className="text-lg font-bold text-gray-900">{name}</h2>
          </Link>
          {/* TODO category name */}
          {/* <p className="mt-1 text-xs text-gray-700">36EU - 4US</p> */}
        </div>
        <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
          <div className="flex items-center border-gray-100">
            <span
              className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
              onClick={() => handleQuanityChange(amount - 1)}
            >
              {" "}
              -{" "}
            </span>
            <input
              className="h-8 w-8 border bg-white text-center text-xs outline-none"
              type="number"
              min="1"
              value={amount}
              onChange={(e) => handleQuanityChange(+e.target.value)}
            />
            <span
              className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
              onClick={() => handleQuanityChange(amount + 1)}
            >
              {" "}
              +{" "}
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <p className="text-sm">{amount * price} PLN</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
