import { useQuery } from "@tanstack/react-query";
import { Category } from "@modules/api/types";
import { restClient } from "..";

export const fetchCategories = async (): Promise<{ data: Category[] }> =>
  restClient("/categories");

export const useCategoriesQueryKey = "categories";
export const useCategoriesQuery = () =>
  useQuery({ queryKey: [useCategoriesQueryKey], queryFn: fetchCategories });
