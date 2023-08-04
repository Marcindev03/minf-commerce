import { confirmPayment } from "@minf-commerce/core";
import { NotificationRequest, PaymentError } from "@minf-commerce/payment";
import { DatabaseErrorResponse, PaymentErrorResponse } from "@modules/server";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const body: NotificationRequest = await req.json();

  try {
    await confirmPayment(body);

    return NextResponse.json({
      data: {
        message: "Payment notification received",
      },
    });
  } catch (err) {
    console.log(err);

    if (err instanceof PaymentError) {
      return new PaymentErrorResponse(err);
    }

    return new DatabaseErrorResponse();
  }
};
