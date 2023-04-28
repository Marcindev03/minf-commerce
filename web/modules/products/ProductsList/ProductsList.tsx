"use client";

import { FC } from "react";
import { useProductsQuery } from "@modules/api";
import { ProductItem } from "../ProductItem";

type ProductsListProps = {};

export const ProductsList: FC<ProductsListProps> = () => {
  const { data } = useProductsQuery();

  return (
    <section className="grid grid-cols-3 col-span-3 gap-10">
      {data?.data?.map((product) => (
        <ProductItem key={product.id} {...product} />
      ))}
    </section>
  );
};
