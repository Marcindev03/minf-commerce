import {
  Order as BaselinkerOrder,
  addOrder,
  setOrderPayment,
} from "@modules/baselinker";
import { COUNTRY_CODE } from "@modules/baselinker";
import { OrderSchemaType } from "./schema";
import { getOrderIdBySessionId } from "@modules/database";

export const createOrder = async ({
  phone,
  email,
  firstName,
  lastName,
  delivery: { method, price, company, address, city, postcode },
  products,
}: OrderSchemaType) => {
  const addOrderParams: BaselinkerOrder = {
    phone,
    email,
    delivery_method: method,
    delivery_price: price,
    delivery_fullname: `${firstName} ${lastName}`,
    delivery_company: company,
    delivery_address: address,
    delivery_city: city,
    delivery_state: "",
    delivery_postcode: postcode,
    delivery_country_code: COUNTRY_CODE,
    products: products.map(
      ({ productId, taxRate, priceBrutto, storageId, variantId, ...rest }) => ({
        storage_id: storageId,
        variant_id: variantId,
        product_id: productId,
        tax_rate: taxRate,
        price_brutto: priceBrutto,
        ...rest,
      })
    ),
  };

  const orderId = await addOrder(addOrderParams);

  return orderId;
};

export const confirmOrderPayment = async (
  sessionId: string,
  payment: {
    amount: number;
    date: Date;
    comment: string;
  }
) => {
  const orderId = await getOrderIdBySessionId(sessionId);

  return await setOrderPayment(orderId.toString(), payment);
};
