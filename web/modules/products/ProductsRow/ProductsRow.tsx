"use client";
import { useProductsQuery } from "@modules/api/client";
import { FC } from "react";
import { ProductItem } from "../ProductItem";

type ProductsRowProps = {
  category?: string;
};

export const ProductsRow: FC<ProductsRowProps> = ({ category }) => {
  const { data } = useProductsQuery(category, [], 4);

  return (
    <section className="flex flex-wrap justify-center xl:justify-between">
      {data?.data.map((product) => (
        <div className="mb-6 mx-3 xl:mx-0">
          <ProductItem key={product.product_id} {...product} />
        </div>
      ))}
    </section>
  );
};
