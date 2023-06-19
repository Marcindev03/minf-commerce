import { OrderSchemaType } from "@modules/api/server";
import {
  PaymentClient,
  Currency,
  Country,
  Language,
  Encoding,
} from "../client";

import { v4 as uuid } from "uuid";
import { CartItem, Order } from "../types";
import { useVercelEnv } from "@modules/vercel";

export const requestPaymentUrl = async (
  orderData: OrderSchemaType,
  orderId: string
) => {
  const sessionId = uuid();

  const {
    email,
    delivery: { price: shipping },
  } = orderData;

  const cart: CartItem[] = orderData.products.map(({}) => ({
    sellerId: "123456",
    sellerCategory: "Electronics",
    name: "Wireless Keyboard",
    description: "A wireless keyboard with long-lasting battery life.",
    quantity: 2,
    price: 30,
    number: 987654321,
  }));

  const cartPrice = 1000;
  const deliveryPrice = parseFloat(orderData.delivery.price) * 100;
  const amount = cartPrice + deliveryPrice;

  const order: Order = {
    sessionId: sessionId,
    amount,
    currency: Currency.PLN,
    // TODO automate description based on cart
    description: "test order",
    email,
    country: Country.Poland,
    language: Language.PL,
    urlReturn: `${useVercelEnv(
      process.env.APP_URL
    )}/cart/order/success/${orderId}`,
    urlStatus: useVercelEnv(process.env.APP_URL) + "/api/orders/confirm",
    timeLimit: 15,
    encoding: Encoding.UTF8,
    waitForResult: true,
    regulationAccept: false,
    shipping: parseFloat(shipping),
    // TODO cart
    // cart,
  };

  const paymentClient = PaymentClient.getInstance();

  const { link } = await paymentClient.createTransaction(order);

  return { link, sessionId };
};
