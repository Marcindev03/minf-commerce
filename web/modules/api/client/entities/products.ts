import { useQuery } from "@tanstack/react-query";
import { Product } from "@modules/api/types";
import qs from "querystringify";
import { restClient } from "..";

export const fetchProducts = async (
  categoryName?: string,
  productsIds?: string[],
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
  const productsLimit = limit ?? null;

  return useQuery({
    queryKey: [
      useProductsQueryKey,
      category,
      productsIds.toString(),
      productsLimit,
    ],
    queryFn: () => fetchProducts(category, productsIds, productsLimit),
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
export const useCartProductsQuery = (productsIds: string[]) =>
  useQuery({
    queryKey: [useCartProductsQuery, productsIds],
    queryFn: () => fetchProducts("", productsIds),
    enabled: false,
  });
