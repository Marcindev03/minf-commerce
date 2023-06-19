import { useQuery } from "@tanstack/react-query";
import { Category } from "@modules/api/types";
import { restClient } from "../client";

export const fetchCategories = async (): Promise<{ data: Category[] }> => {
  const { data, ok } = await restClient("/categories");

  if (!ok) {
    throw new Error("Something went wrong when fetching categories");
  }
  return data;
};

export const useCategoriesQueryKey = "categories";
export const useCategoriesQuery = () =>
  useQuery({ queryKey: [useCategoriesQueryKey], queryFn: fetchCategories });
