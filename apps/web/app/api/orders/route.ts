import { Schema, createOrder } from "@minf-commerce/core";
import { PaymentError } from "@minf-commerce/payment";
// TODO migrate responses to @minf-commerce/core
import {
  DatabaseErrorResponse,
  ZodValidationErrorResponse,
  PaymentErrorResponse,
} from "@modules/server";
import { NextResponse } from "next/server";
import { ZodError } from "zod";

export const POST = async (req: Request) => {
  const body = await req.json();

  try {
    const validatedData = Schema.OrderSchema.parse(body);

    const result = await createOrder(validatedData);

    return NextResponse.json({
      data: {
        ...result,
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
