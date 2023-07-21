import { useMutation } from "@tanstack/react-query";
import { restClient } from "..";
import { Schema } from "@minf-commerce/core";

export const postOrder = async (order: Schema.OrderSchemaType) => {
  const { data, ok } = await restClient(
    "/orders",
    "POST",
    JSON.stringify(order)
  );

  if (!ok) {
    throw new Error("Something went wrong with order processing");
  }

  return data;
};

export const useCreateOrderMutationKey = "createOrder";
export const useCreateOrderMutation = () =>
  useMutation({
    mutationKey: [useCreateOrderMutationKey],
    mutationFn: postOrder,
  });
