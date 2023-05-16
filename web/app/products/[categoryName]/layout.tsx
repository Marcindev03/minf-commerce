import { FC, ReactNode } from "react";
import {
  getQueryClient,
  fetchProducts,
  useProductsQueryKey,
} from "@modules/api/client";
import { dehydrate, Hydrate } from "@tanstack/react-query";

type CategoryLayoutProps = {
  params: {
    categoryName: string;
  };
  children: ReactNode;
};

// @ts-expect-error Server Component
const CategoryLayout: FC<CategoryLayoutProps> = async ({
  params: { categoryName },
  children,
}) => {
  const decodedCategoryName = decodeURI(categoryName);

  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: [useProductsQueryKey, decodedCategoryName, ""],
    queryFn: () => fetchProducts(decodedCategoryName),
  });
  const dehydratedState = dehydrate(queryClient);

  return <Hydrate state={dehydratedState}>{children}</Hydrate>;
};

export default CategoryLayout;
