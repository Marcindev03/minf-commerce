import { useQuery } from "@tanstack/react-query";
import qs from "querystringify";
import { restClient } from "..";
import { Schema } from "@minf-commerce/core";

export const fetchProducts = async (
  categoryName?: string,
  productsIds?: number[],
  limit?: number | null
): Promise<{ data: Schema.ProductSchemaType[] }> => {
  const query = qs.stringify(
    {
      limit,
      category: categoryName,
      ids: productsIds,
    },
    true
  );

  const { data, ok } = await restClient(`/products${query}`);

  if (!ok) {
    throw new Error("Something went wrong during products fetching");
  }

  return data;
};

export const useProductsQueryKey = "products";
export const useProductsQuery = (
  category: string = "",
  productsIds: number[] = [],
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
): Promise<{ data: Schema.ProductSchemaType }> => {
  const { data, ok } = await restClient(`/products/${productId}`);

  if (!ok) {
    throw new Error("Something went wrong during fetching product");
  }

  return data;
};

export const useProductQueryKey = "product";
export const useProductQuery = (productId: string) =>
  useQuery({
    queryKey: [useProductQueryKey, productId],
    queryFn: () => fetchProduct(productId),
  });

export const useCartProductsQueryKey = "cartProducts";
export const useCartProductsQuery = (productsIds?: number[]) =>
  useQuery({
    queryKey: [useCartProductsQuery, productsIds],
    queryFn: () => fetchProducts("", productsIds),
    enabled: false,
  });
