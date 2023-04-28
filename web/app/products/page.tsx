import { CategoriesSidebar } from "@modules/categories";
import { ProductsList } from "@modules/products";
import { FC } from "react";

type ProductsPageProps = {};

const ProductsPage: FC<ProductsPageProps> = () => (
  <article className="grid grid-cols-4">
    <CategoriesSidebar />
    <ProductsList />
  </article>
);

export default ProductsPage;
