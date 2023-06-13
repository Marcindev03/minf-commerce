import { useMutation } from "@tanstack/react-query";
import { restClient } from "..";
import { OrderSchemaType } from "@modules/api/server";

export const postOrder = async (order: OrderSchemaType) => {
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
