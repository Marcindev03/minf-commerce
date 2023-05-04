import { prisma } from "@modules/databse";
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
  const productId = params.id;

  try {
    prisma.$connect();

    const product = await prisma.product.findUnique({
      where: { id: +productId },
    });

    if (!product) {
      return new NotFoundErrorResponse();
    }

    return NextResponse.json({ data: product });
  } catch (err) {
    return new DatabaseErrorResponse();
  } finally {
    prisma.$disconnect();
  }
};
