import { databaseClient } from "../client";

export const saveOrderIdAndSessionId = async (
  orderId: number,
  paymentSessionId: string
) =>
  databaseClient.order.create({
    data: {
      baselinkerOrderId: orderId,
      paymentSessionId,
    },
  });

export const getOrderIdBySessionId = async (paymentSessionId: string) => {
  const result = await databaseClient.order.findUnique({
    where: { paymentSessionId },
    select: { baselinkerOrderId: true },
  });

  if (result?.baselinkerOrderId) {
    return result.baselinkerOrderId;
  }

  throw Error("Order Not Found");
};
