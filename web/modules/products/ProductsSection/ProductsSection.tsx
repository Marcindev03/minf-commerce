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
    <section className="my-8">
      <h3 className="text-3xl font-bold">{title}</h3>
      <hr className="mt-4 mb-6" />
      <ProductsRow category={category} />
    </section>
  );
};
