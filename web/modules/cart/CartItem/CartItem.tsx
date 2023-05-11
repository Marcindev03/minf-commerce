"use client";
import { CustomNextImage } from "@modules/common";
import { inputStyles } from "@modules/styles";
import { Product } from "@modules/api/types";
import classNames from "classnames";
import { FC, useEffect, useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

type CartItemProps = {
  product: Product;
  onQuanityChange?: (name: string, sum: number) => void;
};

export const CartItem: FC<CartItemProps> = ({
  product: {
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
    <article className="w-full grid grid-cols-12 gap-4 px-6 py-4 border-b border-b-slate-300">
      <section className="relative col-span-2 h-20">
        <CustomNextImage src={imageUrl} fill alt={name} />
      </section>
      <p className="col-span-4">{name}</p>
      <p className="col-span-2">{price} zł</p>
      <section className="flex justify-between items-center">
        <button onClick={() => handleQuanityChange(amount - 1)}>
          <AiOutlineMinus />
        </button>
        <input
          type="number"
          className={classNames(inputStyles, "h-fit w-12")}
          value={amount}
          onChange={(e) => handleQuanityChange(+e.target.value)}
        />
        <button onClick={() => handleQuanityChange(amount + 1)}>
          <AiOutlinePlus />
        </button>
      </section>
      <p className="col-span-2">{amount * price} zł</p>
    </article>
  );
};
