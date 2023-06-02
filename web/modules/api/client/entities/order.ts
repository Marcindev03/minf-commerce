import { useMutation, useQuery } from "@tanstack/react-query";
import { restClient } from "..";
import { OrderSchemaType } from "@modules/api/server";

export const postOrder = async (order: OrderSchemaType) =>
  restClient("/orders", "POST", JSON.stringify(order));

export const useCreateOrderMutationKey = "createOrder";
export const useCreateOrderMutation = () =>
  useMutation({
    mutationKey: [useCreateOrderMutationKey],
    mutationFn: postOrder,
  });
