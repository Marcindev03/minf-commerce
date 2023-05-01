import { FC, ReactNode } from "react";
import {
  getQueryClient,
  fetchProducts,
  useProductsQueryKey,
} from "@modules/api";
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
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: [useProductsQueryKey, categoryName],
    queryFn: () => fetchProducts(categoryName),
  });
  const dehydratedState = dehydrate(queryClient);

  return <Hydrate state={dehydratedState}>{children}</Hydrate>;
};

export default CategoryLayout;
