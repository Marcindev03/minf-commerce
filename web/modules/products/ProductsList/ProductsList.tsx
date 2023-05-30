"use client";

import { FC } from "react";
import { useProductsQuery } from "@modules/api/client";
import { ProductItem } from "../ProductItem";

type ProductsListProps = {
  categoryName?: string;
};

export const ProductsList: FC<ProductsListProps> = ({ categoryName }) => {
  const { data } = useProductsQuery(categoryName);

  return (
    <section className="col-span-3">
      <section className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 justify-items-center">
        {data?.data?.map((product) => (
          <ProductItem key={product.product_id} {...product} />
        ))}
      </section>
    </section>
  );
};
