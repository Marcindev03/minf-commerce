import { Order as BaselinkerOrder, addOrder } from "@modules/baselinker";
import { COUNTRY_CODE } from "@modules/baselinker";
import { OrderSchemaType } from "./schema";

export const createOrder = async ({
  phone,
  email,
  firstName,
  lastName,
  delivery: { method, price, company, address, city, state, postcode },
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
    delivery_state: state,
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
