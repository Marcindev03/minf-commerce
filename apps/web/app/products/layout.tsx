import { FC, ReactNode } from "react";
import {
  getQueryClient,
  fetchProducts,
  useProductsQueryKey,
} from "@modules/api/client";
import { dehydrate, Hydrate } from "@tanstack/react-query";
import { productsLayoutImage } from "@modules/assets";
import { CategoriesSidebar } from "@modules/categories";
import { CustomNextImage } from "@modules/common";

type ProductsLayoutProps = {
  children: ReactNode;
};

// @ts-expect-error Server Component
const ProductsLayout: FC<ProductsLayoutProps> = async ({ children }) => {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: [useProductsQueryKey, "", "", null],
    queryFn: () => fetchProducts(),
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <section>
      <CustomNextImage
        src={productsLayoutImage}
        alt={"Products Layout Image"}
        width={1280}
        className="max-h-80 object-cover"
        priority
        loading="eager"
      />
      <Hydrate state={dehydratedState}>
        <article>
          <CategoriesSidebar />
          {children}
        </article>
      </Hydrate>
    </section>
  );
};

export default ProductsLayout;
