import { ProductsList } from "@modules/products";
import { FC } from "react";

type CategoryPageProps = {
  params: {
    categoryName: string;
  };
};

const CategoryPage: FC<CategoryPageProps> = ({ params: { categoryName } }) => (
  <ProductsList categoryName={decodeURI(categoryName)} />
);

export default CategoryPage;
