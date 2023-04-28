import { QueryClient } from "@tanstack/react-query";
import { cache } from "react";

export const getQueryClient = cache(() => new QueryClient());

export const restClient = async (url: string) => {
  const baseUrl = "http://localhost:3000/api";

  const res = await fetch(`${baseUrl}${url}`);
  const data = await res.json();

  return data;
};
