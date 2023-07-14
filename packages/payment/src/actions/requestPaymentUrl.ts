import {
  PaymentClient,
  Currency,
  Country,
  Language,
  Encoding,
} from "../client";

import { v4 as uuid } from "uuid";
import { Order } from "../types";
import { OrderSchemaType } from "@minf-commerce/core";
import { getDeliveryMethodPrice } from "@minf-commerce/database";
import { useVercelEnv } from "@minf-commerce/helpers";

export const requestPaymentUrl = async (
  orderData: OrderSchemaType,
  orderId: number
) => {
  const sessionId = uuid();

  // TODO Cart
  // const cart: CartItem[] = orderData.products.map(({}) => ({
  //   sellerId: "123456",
  //   sellerCategory: "Electronics",
  //   name: "Wireless Keyboard",
  //   description: "A wireless keyboard with long-lasting battery life.",
  //   quantity: 2,
  //   price: 30,
  //   number: 987654321,
  // }));

  const cartPrice = 1000;
  const deliveryMethodPrice =
    (await getDeliveryMethodPrice(orderData.delivery.id)) * 100;
  const amount = cartPrice + deliveryMethodPrice;

  const order: Order = {
    sessionId: sessionId,
    amount,
    currency: Currency.PLN,
    // TODO automate description based on cart
    description: "test order",
    email: orderData.email,
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
    shipping: deliveryMethodPrice,
    // TODO cart
    // cart,
  };

  const paymentClient = PaymentClient.getInstance();

  const { link } = await paymentClient.createTransaction(order);

  return { paymentUrl: link, sessionId };
};
