import { useProductsQuery } from "@modules/api/client";
import { FC } from "react";
import { ProductItem } from "../ProductItem";

type ProductsRowProps = {
  category?: string;
};

export const ProductsRow: FC<ProductsRowProps> = ({ category }) => {
  const { data } = useProductsQuery(category);

  return (
    <section className="grid grid-cols-4 gap-12">
      {data?.data.map((product) => (
        <ProductItem key={product.product_id} {...product} />
      ))}
    </section>
  );
};
