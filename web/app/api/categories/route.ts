import { NextResponse } from "next/server";
import { prisma } from "@modules/databse";
import { DatabaseErrorResponse } from "@modules/server";

export const GET = async () => {
  prisma.$connect();

  try {
    const categories = await prisma.category.findMany({});

    return NextResponse.json({ data: categories });
  } catch (err) {
    return new DatabaseErrorResponse();
  } finally {
    prisma.$disconnect;
  }
};
