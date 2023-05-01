import { useQuery } from "@tanstack/react-query";
import { Product } from "@prisma/client";
import qs from "querystringify";
import { restClient } from "../client";

export const fetchProducts = async (
  categoryName?: string
): Promise<{ data: Product[] }> => {
  const query = qs.stringify(
    {
      category: categoryName,
    },
    true
  );

  return restClient(`/products${query}`);
};

export const useProductsQueryKey = "products";
export const useProductsQuery = (category: string = "") =>
  useQuery({
    queryKey: [useProductsQueryKey, category],
    queryFn: () => fetchProducts(category),
  });
