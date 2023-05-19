import { useQuery } from "@tanstack/react-query";
import { Product } from "@modules/api/types";
import qs from "querystringify";
import { restClient } from "..";

export const fetchProducts = async (
  categoryName?: string,
  productsIds?: string,
  limit?: number | null
): Promise<{ data: Product[] }> => {
  const query = qs.stringify(
    {
      limit,
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
  productsIds: string[] = [],
  limit?: number
) => {
  const ids = productsIds.length ? productsIds.join(",") : "";
  const productsLimit = limit ?? null;

  return useQuery({
    queryKey: [useProductsQueryKey, category, ids, productsLimit],
    queryFn: () => fetchProducts(category, ids, productsLimit),
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

export const useCartProductsQueryKey = "cartProducts";
export const useCartProductsQuery = (productsIds: string[]) => {
  const ids = productsIds.length ? productsIds.join(",") : "";
  return useQuery({
    queryKey: [useCartProductsQuery, ids],
    queryFn: () => fetchProducts("", ids),
    enabled: false,
  });
};
