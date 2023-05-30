import { QueryClient } from "@tanstack/react-query";
import { cache } from "react";

export const getQueryClient = cache(() => new QueryClient());

export const restClient = async (url: string) => {
  console.log(process.env.NEXT_PUBLIC_VERCEL_URL);

  const baseUrl = `${process.env.NEXT_PUBLIC_VERCEL_URL}/api`;
  const finalUrl = baseUrl + url;

  const res = await fetch(finalUrl);
  const data = await res.json();

  return data;
};
