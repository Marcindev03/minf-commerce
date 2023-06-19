import { DeliveryMethodSchema } from "@modules/api/server";
import { getDeliveryMethods, saveDeliveryMethod } from "@modules/database";
import {
  DatabaseErrorResponse,
  ZodValidationErrorResponse,
} from "@modules/server";
import { NextResponse } from "next/server";
import { ZodError } from "zod";

export const GET = async (req: Request) => {
  try {
    const deliveryMethods = await getDeliveryMethods();

    return NextResponse.json({
      data: deliveryMethods,
    });
  } catch (err) {
    console.log(err);

    return new DatabaseErrorResponse();
  }
};

export const POST = async (req: Request) => {
  const body = await req.json();

  try {
    const { name, price } = DeliveryMethodSchema.parse(body);

    const { id } = await saveDeliveryMethod(name, price);

    return NextResponse.json({
      data: {
        deliveryMethodId: id,
      },
    });
  } catch (err) {
    console.log(err);

    if (err instanceof ZodError) {
      return new ZodValidationErrorResponse(err);
    }
  }
};
