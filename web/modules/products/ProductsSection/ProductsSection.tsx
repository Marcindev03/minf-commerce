import { FC } from "react";
import { ProductsRow } from "../ProductsRow";

type ProductsSectionProps = {
  title: string;
  category?: string;
};

export const ProductsSection: FC<ProductsSectionProps> = ({
  title,
  category,
}) => {
  return (
    <section className="">
      <h3 className="text-3xl font-bold my-8 text-center">{title}</h3>
      <hr className="mb-8" />
      <ProductsRow category={category} />
    </section>
  );
};
