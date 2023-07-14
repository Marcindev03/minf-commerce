import { confirmOrderPayment } from "@modules/api/server";
import {
  verifyNotification,
  verifyPayment,
  NotificationRequest,
  Verification,
  PaymentError,
} from "@minf-commerce/payment";
import { DatabaseErrorResponse, PaymentErrorResponse } from "@modules/server";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const body: NotificationRequest = await req.json();

  try {
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
        await confirmOrderPayment(body.sessionId, {
          amount: body.amount / 100,
          date: new Date(),
          comment: `Zweryfikowano płatność ${new Date()}`,
        });

        return NextResponse.json({
          data: {
            message: "Payment notification received",
          },
        });
      }
    }
  } catch (err) {
    console.log(err);

    if (err instanceof PaymentError) {
      return new PaymentErrorResponse(err);
    }

    return new DatabaseErrorResponse();
  }
};
