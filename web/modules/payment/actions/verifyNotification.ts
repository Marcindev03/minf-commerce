import { NotificationRequest } from "@ingameltd/node-przelewy24";
import { PaymentClient } from "../client";

export const verifyNotification = async (notification: NotificationRequest) => {
  const paymentClient = PaymentClient.getInstance();

  return paymentClient.verifyNotification(notification);
};
