import { OrderSchema, createOrder } from "@minf-commerce/core";
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
  const body = await req.json();

  try {
    const validatedData = OrderSchema.parse(body);
    const { internalOrderId, baselinkerOrderId } = await createOrder(
      validatedData
    );

    // Step 3 save baselinker order id and request for payment
    // TODO save baselinker order id
    // const { paymentUrl, sessionId } = await requestPaymentUrl(
    //   validatedData,
    //   orderId
    // );

    // Step 4 save session id in order
    // await saveOrderIdAndSessionId(+orderId, sessionId);

    return NextResponse.json({
      data: {
        internalOrderId,
        baselinkerOrderId,
        // paymentUrl,
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
