import { databaseClient } from "../client";

export const saveOrderIdAndSessionId = async (
  orderId: number,
  sessionId: string
) =>
  databaseClient.order.create({
    data: {
      orderId,
      sessionId,
    },
  });

export const getOrderIdBySessionId = async (sessionId: string) => {
  const result = await databaseClient.order.findUnique({
    where: { sessionId },
    select: { orderId: true },
  });

  if (result?.orderId) {
    return result.orderId;
  }

  throw Error("Order Not Found");
};
