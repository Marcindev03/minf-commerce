"use client";

import { FC } from "react";
import { useProductsQuery } from "@modules/api";
import { ProductItem } from "../ProductItem";

type ProductsListProps = {
  categoryName?: string;
};

export const ProductsList: FC<ProductsListProps> = ({ categoryName }) => {
  const { data } = useProductsQuery(categoryName);

  return (
    <section className="grid grid-cols-3 col-span-3 gap-10">
      {data?.data?.map((product) => (
        <ProductItem key={product.id} {...product} />
      ))}
    </section>
  );
};
