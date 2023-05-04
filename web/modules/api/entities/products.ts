import { useQuery } from "@tanstack/react-query";
import { Product } from "@prisma/client";
import qs from "querystringify";
import { restClient } from "../client";

export const fetchProducts = async (
  categoryName?: string,
  productsIds?: string
): Promise<{ data: Product[] }> => {
  const query = qs.stringify(
    {
      category: categoryName,
      ids: productsIds,
    },
    true
  );

  return restClient(`/products${query}`);
};

export const useProductsQueryKey = "products";
export const useProductsQuery = (
  category: string = "",
  productsIds: string[] = []
) => {
  const ids = productsIds.length ? productsIds.join(",") : "";

  return useQuery({
    queryKey: [useProductsQueryKey, category, ids],
    queryFn: () => fetchProducts(category, ids),
  });
};

export const fetchProduct = async (
  productId: string
): Promise<{ data: Product }> => restClient(`/products/${productId}`);

export const useProductQueryKey = "product";
export const useProductQuery = (productId: string) =>
  useQuery({
    queryKey: [useProductQueryKey, productId],
    queryFn: () => fetchProduct(productId),
  });
