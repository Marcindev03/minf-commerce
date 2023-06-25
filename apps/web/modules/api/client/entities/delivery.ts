import { useMutation, useQuery } from "@tanstack/react-query";
import { restClient } from "..";
import { DeliveryMethodSchemaType } from "@modules/api/server";
import { DeliveryMethod } from "@minf-commerce/database";

export const getDeliveryMethods = async (): Promise<{
  data: DeliveryMethod[];
}> => {
  const { data, ok } = await restClient("/deliveries");

  if (!ok) {
    throw new Error("Something went wrong during fetching delivery methods");
  }

  return data;
};

export const useGetDeliveryMethodsQueryKey = "getDeliveryMethods";
export const useGetDeliveryMethodsQuery = () =>
  useQuery({
    queryKey: [useGetDeliveryMethodsQueryKey],
    queryFn: getDeliveryMethods,
  });

export const createDeliveryMethod = async (
  deliveryMethod: DeliveryMethodSchemaType
) => {
  const { data, ok } = await restClient(
    "/deliveries",
    "POST",
    JSON.stringify(deliveryMethod)
  );

  if (!ok) {
    throw new Error("Something went wrong during delivery method creation");
  }

  return data;
};

export const useCreateDeliveryMethodMutationKey = "createDeliveryMethod";
export const useCreateDeliveryMethodMutation = () =>
  useMutation({
    mutationKey: [useCreateDeliveryMethodMutationKey],
    mutationFn: createDeliveryMethod,
  });
