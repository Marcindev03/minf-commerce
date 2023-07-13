import { COUNTRY_CODE, addOrder } from "@minf-commerce/baselinker";
import {
  getDeliveryMethod,
  getProductsById,
  saveOrder,
  updateOrder,
} from "@minf-commerce/database";
import { OrderSchemaType } from "../models";

export const createOrder = async (order: OrderSchemaType) => {
  const [internalOrderId, baselinkerOrderId] = await Promise.all([
    createDbOrder(order),
    createBaselinkerOrder(order),
  ]);

  await connectInternalOrderWithBaselinkerOrder(
    internalOrderId,
    +baselinkerOrderId
  );

  return { internalOrderId, baselinkerOrderId };
};

const createDbOrder = async (order: OrderSchemaType) => {
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
  });

  return internalOrderId;
};

const createBaselinkerOrder = async (order: OrderSchemaType) => {
  const productsIds = order.products.map((product) => product.id);

  const [deliveryMethod, products] = await Promise.all([
    getDeliveryMethod(order.delivery.id),
    getProductsById(productsIds),
  ]);

  const formatAddress = (order: OrderSchemaType) =>
    `${order.delivery.street} ${order.delivery.houseNumber} ${
      !!order.delivery.flatNumber && `/${order.delivery.flatNumber}`
    }`;

  const formatProducts = (order: OrderSchemaType) =>
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

// export const confirmOrderPayment = async (
//   sessionId: string,
//   payment: {
//     amount: number;
//     date: Date;
//     comment: string;
//   }
// ) => {
//   const orderId = await getOrderIdBySessionId(sessionId);

//   return await setOrderPayment(orderId.toString(), payment);
// };
