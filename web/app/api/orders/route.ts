import { OrderSchema, createOrder } from "@modules/api/server";
import { Order } from "@modules/api/types";
import { saveOrderIdAndSessionId } from "@modules/database";
import { PaymentError, requestPaymentUrl } from "@modules/payment";
import {
  DatabaseErrorResponse,
  PaymentErrorResponse,
  ZodValidationErrorResponse,
} from "@modules/server";
import { NextResponse } from "next/server";
import { ZodError } from "zod";

export const POST = async (req: Request) => {
  const body = (await req.json()) as Order;

  try {
    const validatedData = OrderSchema.parse(body);
    const orderId = await createOrder(validatedData);

    const { link: paymentUrl, sessionId } = await requestPaymentUrl(
      validatedData
    );

    await saveOrderIdAndSessionId(+orderId, sessionId);

    return NextResponse.json({
      data: {
        orderId,
        paymentUrl,
      },
    });
  } catch (err) {
    console.log(err);

    if (err instanceof ZodError) {
      return new ZodValidationErrorResponse(err);
    }

    if (err instanceof PaymentError) {
      return new PaymentErrorResponse(err);
    }

    return new DatabaseErrorResponse();
  }
};
