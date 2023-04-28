import { useQuery } from "@tanstack/react-query";
import { Product } from "@prisma/client";
import { restClient } from "../client";

export const fetchProducts = async (): Promise<{ data: Product[] }> =>
  restClient("/products");

export const useProductsQueryKey = "products";
export const useProductsQuery = () =>
  useQuery({ queryKey: [useProductsQueryKey], queryFn: fetchProducts });
