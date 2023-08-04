import { Prisma } from "@prisma/client";
import { prisma } from "../client";

export const getOrder = async (orderId: number) => {
  return prisma.order.findUnique({
    where: {
      id: orderId,
    },
    include: {
      delivery: true,
      // products: true,
    },
  });
};

export const getOrders = async () => {
  return prisma.order.findMany({
    include: {
      delivery: true,
      // products: true,
    },
  });
};

export const saveOrder = async (orderData: Prisma.OrderCreateInput) => {
  return prisma.order.create({
    data: orderData,
  });
};

export const updateOrder = async (
  orderId: number,
  updatedOrderData: Prisma.OrderUpdateInput
) => {
  return prisma.order.update({
    where: {
      id: orderId,
    },
    data: updatedOrderData,
  });
};

export const deleteOrder = async (orderId: number) => {
  return prisma.order.delete({
    where: {
      id: orderId,
    },
  });
};

export const getOrderIdsByPaymentSessionId = async (
  paymentSessionId: string
) => {
  const result = await prisma.order.findFirst({
    where: { paymentSessionId },
    select: {
      id: true,
      baselinkerOrderId: true,
    },
  });

  return {
    internalOrderId: result?.id as number,
    baselinkerOrderId: result?.baselinkerOrderId as number,
  };
};
