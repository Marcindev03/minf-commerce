import { OrderSchema, createOrder } from "@modules/api/server";
import { Order } from "@modules/api/types";
import { DatabaseErrorResponse, ZodValidationError } from "@modules/server";
import { NextResponse } from "next/server";
import { ZodError } from "zod";

export const POST = async (req: Request) => {
  const body = (await req.json()) as Order;

  try {
    const validatedData = OrderSchema.parse(body);
    const orderId = await createOrder(validatedData);

    return NextResponse.json({ data: orderId });
  } catch (err) {
    if (err instanceof ZodError) {
      return new ZodValidationError(err);
    }

    console.log(err);
    return new DatabaseErrorResponse();
  }
};
