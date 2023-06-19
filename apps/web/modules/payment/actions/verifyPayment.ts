import { PaymentClient } from "../client";
import { Verification } from "../types";

export const verifyPayment = async (verifyRequest: Verification) => {
  const paymentClient = PaymentClient.getInstance();

  return await paymentClient.verifyTransaction(verifyRequest);
};
