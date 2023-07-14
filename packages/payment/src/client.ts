import { P24 } from "@ingameltd/node-przelewy24";

export class PaymentClient {
  private static instance: P24;

  private constructor() {}

  public static getInstance(): P24 {
    if (!PaymentClient.instance) {
      PaymentClient.instance = new P24(
        parseInt(process.env.PAYMENT_MERCHANT_ID!),
        parseInt(process.env.PAYMENT_POS_ID!),
        process.env.PAYMENT_API_KEY!,
        process.env.PAYMENT_CRC_KEY!,
        {
          sandbox: true,
        }
      );
    }

    return PaymentClient.instance;
  }
}

export {
  Currency,
  Country,
  Language,
  Encoding,
  P24Error,
} from "@ingameltd/node-przelewy24";
