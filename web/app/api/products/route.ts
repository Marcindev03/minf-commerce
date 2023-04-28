import { NextResponse } from "next/server";
import { prisma } from "@modules/databse";
import { DatabaseErrorResponse } from "@modules/server";

export const GET = async () => {
  prisma.$connect();

  try {
    const products = await prisma.product.findMany({});

    return NextResponse.json({ data: products });
  } catch (err) {
    return new DatabaseErrorResponse();
  } finally {
    prisma.$disconnect;
  }
};
