import { isDev, isServer } from "@modules/helpers";
import { QueryClient } from "@tanstack/react-query";
import { useVercelEnv } from "@minf-commerce/helpers";
// @ts-expect-error
import { cache } from "react";

export const getQueryClient = cache(() => new QueryClient());

type HTTP_METHOD = "GET" | "POST";

export const restClient = async (
  url: string,
  method?: HTTP_METHOD,
  body?: BodyInit
) => {
  const baseUrl = isDev
    ? "http://localhost:4000/api"
    : isServer
    ? `${useVercelEnv()}/api`
    : "/api";

  const finalUrl = baseUrl + url;

  const res = await fetch(finalUrl, {
    method: method ?? "GET",
    body,
  });

  const data = await res.json();

  return { data, status: res.status, ok: res.ok };
};
