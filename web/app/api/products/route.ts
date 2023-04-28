import { NextResponse } from "next/server";
import { prisma } from "@modules/databse";
import { DatabaseErrorResponse } from "@modules/server";

export const GET = async (req: Request) => {
  prisma.$connect();

  // TODO improve filters
  let filters = {};

  const { searchParams } = new URL(req.url);
  const category = searchParams.get("category");

  if (category) {
    filters = Object.assign(filters, {
      where: { category: { name: category } },
    });
  }

  try {
    const products = await prisma.product.findMany(filters);

    return NextResponse.json({ data: products });
  } catch (err) {
    return new DatabaseErrorResponse();
  } finally {
    prisma.$disconnect;
  }
};
