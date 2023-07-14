import { Prisma } from "@prisma/client";
import { prisma } from "../client";

export const getDeliveryMethod = async (deliveryMethodId: number) => {
  return prisma.deliveryMethod.findUnique({
    where: {
      id: deliveryMethodId,
    },
  });
};

export const getDeliveryMethods = async () => {
  return prisma.deliveryMethod.findMany();
};

export const saveDeliveryMethod = async (
  deliveryMethodData: Prisma.DeliveryMethodCreateInput
) => {
  return prisma.deliveryMethod.create({
    data: deliveryMethodData,
  });
};

export const updateDeliveryMethod = async (
  deliveryMethodId: number,
  updatedDeliveryMethodData: Prisma.DeliveryMethodUpdateInput
) => {
  return prisma.deliveryMethod.update({
    where: {
      id: deliveryMethodId,
    },
    data: updatedDeliveryMethodData,
  });
};

export const deleteDeliveryMethod = async (deliveryMethodId: number) => {
  return prisma.deliveryMethod.delete({
    where: {
      id: deliveryMethodId,
    },
  });
};

export const getDeliveryMethodPrice = async (id: number) => {
  const result = await prisma.deliveryMethod.findUnique({
    where: { id },
    select: {
      price: true,
    },
  });

  return result?.price as number;
};
