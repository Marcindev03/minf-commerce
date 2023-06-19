import { databaseClient } from "../client";

export const getDeliveryMethods = async () =>
  databaseClient.deliveryMethod.findMany();

export const saveDeliveryMethod = async (name: string, price: number) =>
  databaseClient.deliveryMethod.create({ data: { name, price } });
