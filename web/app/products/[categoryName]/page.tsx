import { CategoriesSidebar } from "@modules/categories";
import { ProductsList } from "@modules/products";
import { FC } from "react";

type CategoryPageProps = {
  params: {
    categoryName: string;
  };
};

const CategoryPage: FC<CategoryPageProps> = ({ params: { categoryName } }) => {
  return (
    <article className="grid grid-cols-4">
      <CategoriesSidebar />
      <ProductsList categoryName={categoryName} />
    </article>
  );
};

export default CategoryPage;
