import {
  NotificationRequest,
  Verification,
  requestPaymentUrl,
  verifyNotification,
  verifyPayment,
} from "@minf-commerce/payment";
import {
  COUNTRY_CODE,
  addOrder,
  setOrderPayment,
} from "@minf-commerce/baselinker";
import {
  PAYMENT_STATUS,
  getDeliveryMethod,
  getOrderIdsByPaymentSessionId,
  getProductsById,
  saveOrder,
  updateOrder,
} from "@minf-commerce/database";
import { Schema } from "..";

export const createOrder = async (order: Schema.OrderSchemaType) => {
  const [internalOrderId, baselinkerOrderId] = await Promise.all([
    createDbOrder(order),
    createBaselinkerOrder(order),
  ]);

  await connectInternalOrderWithBaselinkerOrder(
    internalOrderId,
    +baselinkerOrderId
  );

  const { paymentUrl, sessionId } = await requestPaymentUrl(
    order,
    internalOrderId
  );

  await savePaymentSessionIdInOrder(internalOrderId, sessionId);

  return { internalOrderId, paymentUrl };
};

const createDbOrder = async (order: Schema.OrderSchemaType) => {
  const { id: internalOrderId } = await saveOrder({
    phone: order.phone,
    email: order.email,
    firstName: order.firstName,
    lastName: order.lastName,
    street: order.delivery.street,
    houseNumber: order.delivery.houseNumber,
    postalCode: order.delivery.postcode,
    city: order.delivery.city,
    delivery: {
      connect: {
        id: order.delivery.id,
      },
    },
    orderProducts: {
      create: order.products.map(({ id, quantity }) => ({
        productId: id,
        quantity,
      })),
    },
    paymentStatus: PAYMENT_STATUS.PENDING,
  });

  return internalOrderId;
};

const createBaselinkerOrder = async (order: Schema.OrderSchemaType) => {
  const productsIds = order.products.map((product) => product.id);

  const [deliveryMethod, products] = await Promise.all([
    getDeliveryMethod(order.delivery.id),
    getProductsById(productsIds),
  ]);

  const formatAddress = (order: Schema.OrderSchemaType) =>
    `${order.delivery.street} ${order.delivery.houseNumber} ${
      !!order.delivery.flatNumber && `/${order.delivery.flatNumber}`
    }`;

  const formatProducts = (order: Schema.OrderSchemaType) =>
    order.products.map((product, i) => ({
      quantity: product.quantity,
      product_id: products.find((prod) => prod.id === product.id)
        ?.baselinkerProductId as string,
    }));

  const baselinkerOrderId = await addOrder({
    phone: order.phone,
    email: order.email,
    delivery_method: deliveryMethod?.name as string,
    delivery_price: deliveryMethod?.price.toString() as string,
    delivery_fullname: `${order.firstName} ${order.lastName}`,
    delivery_company: "",
    delivery_address: formatAddress(order),
    delivery_city: order.delivery.city,
    delivery_state: "",
    delivery_postcode: order.delivery.postcode,
    delivery_country_code: COUNTRY_CODE,
    products: formatProducts(order),
  });

  return baselinkerOrderId;
};

export const connectInternalOrderWithBaselinkerOrder = async (
  orderId: number,
  baselinkerOrderId: number
) => updateOrder(orderId, { baselinkerOrderId });

export const savePaymentSessionIdInOrder = async (
  orderId: number,
  paymentSessionId: string
) => updateOrder(orderId, { paymentSessionId });

export const confirmPayment = async (body: NotificationRequest) => {
  const isNotificationValid = await verifyNotification(body);

  if (isNotificationValid) {
    const verifyRequest: Verification = {
      amount: body.amount,
      currency: body.currency,
      orderId: body.orderId,
      sessionId: body.sessionId,
    };

    const isPaymentValid = await verifyPayment(verifyRequest);

    if (isPaymentValid) {
      await updateOrderPaymentStatus(body.sessionId, {
        amount: body.amount / 100,
        date: new Date(),
        comment: `Zweryfikowano płatność ${new Date()}`,
      });

      return {
        isConnfirmed: true,
      };
    }
  }
};

export const updateOrderPaymentStatus = async (
  paymentSessionId: string,
  payment: {
    amount: number;
    date: Date;
    comment: string;
  }
) => {
  const { internalOrderId, baselinkerOrderId } =
    await getOrderIdsByPaymentSessionId(paymentSessionId);

  await Promise.all([
    setOrderPayment(baselinkerOrderId.toString(), payment),
    updateOrder(internalOrderId, { paymentStatus: PAYMENT_STATUS.SUCCESS }),
  ]);
};
