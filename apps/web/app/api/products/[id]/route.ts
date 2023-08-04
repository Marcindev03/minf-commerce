import { getProduct } from "@minf-commerce/core";
import { DatabaseErrorResponse, NotFoundErrorResponse } from "@modules/server";
import { NextResponse } from "next/server";

export const GET = async (
  req: Request,
  {
    params,
  }: {
    params: {
      id: string;
    };
  }
) => {
  const productId = +params.id;

  try {
    const product = await getProduct(productId);

    if (!product) {
      return new NotFoundErrorResponse();
    }

    return NextResponse.json({ data: product });
  } catch (err) {
    return new DatabaseErrorResponse();
  }
};
