import { saveOrder } from "@minf-commerce/database";
import { OrderSchemaType } from "../models";

export const createOrder = async (order: OrderSchemaType) => {
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

  // const addOrderParams: BaselinkerOrder = {
  //   phone,
  //   email,
  //   delivery_method: method,
  //   delivery_price: price,
  //   delivery_fullname: `${firstName} ${lastName}`,
  //   delivery_company: company,
  //   delivery_address: address,
  //   delivery_city: city,
  //   delivery_state: "",
  //   delivery_postcode: postcode,
  //   delivery_country_code: COUNTRY_CODE,
  //   products: products.map(
  //     ({ productId, taxRate, priceBrutto, storageId, variantId, ...rest }) => ({
  //       storage_id: storageId,
  //       variant_id: variantId,
  //       product_id: productId,
  //       tax_rate: taxRate,
  //       price_brutto: priceBrutto,
  //       ...rest,
  //     })
  //   ),
  // };

  // const orderId = await addOrder(addOrderParams);

  // return orderId;

  return internalOrderId;
};

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
