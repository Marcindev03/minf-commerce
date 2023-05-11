import { FC, ReactNode } from "react";
import {
  getQueryClient,
  useProductQueryKey,
  fetchProduct,
} from "@modules/api/client";
import { dehydrate, Hydrate } from "@tanstack/react-query";

type ProductLayoutProps = {
  children: ReactNode;
  params: {
    id: string;
  };
};

// @ts-expect-error Server Component
const ProductLayout: FC<ProductLayoutProps> = async ({
  children,
  params: { id },
}) => {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery([useProductQueryKey, id], () =>
    fetchProduct(id)
  );
  const dehydratedState = dehydrate(queryClient);

  return <Hydrate state={dehydratedState}>{children}</Hydrate>;
};

export default ProductLayout;
