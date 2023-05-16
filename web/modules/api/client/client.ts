import { QueryClient } from "@tanstack/react-query";
import { cache } from "react";

export const getQueryClient = cache(() => new QueryClient());

export const restClient = async (url: string) => {
  const baseUrl = "http://localhost:4000/api";
  const finalUrl = baseUrl + url;

  const res = await fetch(finalUrl);
  const data = await res.json();

  return data;
};
