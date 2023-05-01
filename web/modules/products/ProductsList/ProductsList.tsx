"use client";

import { FC } from "react";
import { useProductsQuery } from "@modules/api";
import { ProductItem } from "../ProductItem";
import Link from "next/link";

type ProductsListProps = {
  categoryName?: string;
};

export const ProductsList: FC<ProductsListProps> = ({ categoryName }) => {
  const { data } = useProductsQuery(categoryName);

  return (
    <section className="col-span-3">
      <article>
        <h3 className="text-2xl pb-4">
          <Link href="/products" className="hover:underline">
            Produkty
          </Link>{" "}
          {!!categoryName && `| ${categoryName}`}
        </h3>
      </article>
      <section className="grid grid-cols-3  gap-10">
        {data?.data?.map((product) => (
          <ProductItem key={product.id} {...product} />
        ))}
      </section>
    </section>
  );
};
