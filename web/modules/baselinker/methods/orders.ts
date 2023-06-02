import { baselinkerClient } from "../client";
import {
  CURRENCY,
  CUSTOM_ORDER_SOURCE_ID,
  NEW_ORDER_STATUS_NAME,
} from "../config";
import { AddOrderResponse, Order, OrderStatusReponse } from "../types";

export const getOrderStatusList = async () => {
  const { statuses } = await baselinkerClient<OrderStatusReponse>(
    "getOrderStatusList"
  );

  return statuses;
};

export const getNewOrderStatusId = async () =>
  (await getOrderStatusList()).find(
    ({ name }) => name === NEW_ORDER_STATUS_NAME
  )?.id;

export const addOrder = async (order: Order) => {
  const orderStatusId = await getNewOrderStatusId();
  const orderDate = Math.floor(new Date().getTime() / 1000);

  const orderInput = {
    order_status_id: orderStatusId,
    custom_source_id: CUSTOM_ORDER_SOURCE_ID,
    date_add: orderDate,
    currency: CURRENCY,
    paid: "0",
    ...order,
  };

  const { order_id } = await baselinkerClient<AddOrderResponse>(
    "addOrder",
    orderInput
  );

  return order_id;
};
