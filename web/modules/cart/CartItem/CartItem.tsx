"use client";
import { Product } from "@modules/api/types";
import Link from "next/link";
import { ChangeEvent, FC, useMemo } from "react";
import { Card, CustomNextImage } from "@modules/common";
import { HiOutlineTrash } from "react-icons/hi2";
import { useCartContext } from "../CartContext";

type CartItemProps = {
  product: Product;
};

export const CartItem: FC<CartItemProps> = ({
  product: {
    product_id,
    text_fields: { name },
    prices: [price],
    images: [imageUrl],
  },
}) => {
  const { cart, changeProductQuantity, removeFromCart } = useCartContext();

  const handleQuantityDecrease = () =>
    changeProductQuantity({
      productId: product_id,
      quantity: quantity <= 1 ? 1 : quantity - 1,
    });
  const handleQuantityIncrease = () =>
    changeProductQuantity({ productId: product_id, quantity: quantity + 1 });
  const handleQuantityChange = (e: ChangeEvent<HTMLInputElement>) =>
    changeProductQuantity({ productId: product_id, quantity: +e.target.value });

  const handleProductDelete = () => removeFromCart(product_id);

  const quantity = useMemo(
    () => cart.get(product_id)?.quantity ?? 1,
    [cart.get(product_id)]
  );

  return (
    <Card className="relative mb-6 md:flex">
      <Link
        href={`/product/${product_id}`}
        className="w-full flex justify-center md:justify-start"
      >
        <CustomNextImage src={imageUrl} alt={name} width={400} height={100} />
      </Link>
      <div className="md:w-full ml-6">
        <div className="mt-5">
          <h2 className="text-lg font-bold text-gray-900">{name}</h2>
          {/* TODO category name */}
        </div>
        <div className="mt-4 flex justify-between">
          <div className="flex items-center space-x-4">
            <p className="text-sm">{(quantity * price).toFixed(2)} PLN</p>
          </div>
          <div className="flex items-center border-gray-100">
            <span
              className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
              onClick={handleQuantityDecrease}
            >
              {" "}
              -{" "}
            </span>
            <input
              className="h-8 w-8 border bg-white text-center text-xs outline-none"
              type="number"
              min="1"
              value={quantity}
              onChange={handleQuantityChange}
            />
            <span
              className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
              onClick={handleQuantityIncrease}
            >
              {" "}
              +{" "}
            </span>
          </div>
        </div>
      </div>
      <div className="absolute top-6 left-6 bg-white p-2 cursor-pointer">
        <HiOutlineTrash size={"1.5rem"} onClick={handleProductDelete} />
      </div>
    </Card>
  );
};
