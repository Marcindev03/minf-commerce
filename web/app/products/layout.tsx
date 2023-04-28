import { FC, ReactNode } from "react";
import Image from "next/image";
import {
  getQueryClient,
  fetchProducts,
  useProductsQueryKey,
  useCategoriesQueryKey,
  fetchCategories,
} from "@modules/api";
import { dehydrate, Hydrate } from "@tanstack/react-query";
import { productsLayoutImage } from "@modules/assets";

type ProductsLayoutProps = {
  children: ReactNode;
};

// @ts-expect-error Server Component
const ProductsLayout: FC<ProductsLayoutProps> = async ({ children }) => {
  const queryClient = getQueryClient();

  await Promise.all([
    queryClient.prefetchQuery({
      queryKey: [useProductsQueryKey],
      queryFn: () => fetchProducts(),
    }),
    queryClient.prefetchQuery([useCategoriesQueryKey], fetchCategories),
  ]);

  const dehydratedState = dehydrate(queryClient);

  return (
    <section>
      <Image
        src={productsLayoutImage}
        alt={"Products Layout Image"}
        width={1280}
        className="max-h-80 object-cover mb-12"
      />
      <Hydrate state={dehydratedState}>{children}</Hydrate>
    </section>
  );
};

export default ProductsLayout;
