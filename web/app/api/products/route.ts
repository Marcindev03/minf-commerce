import { NextResponse } from "next/server";
import { prisma } from "@modules/databse";
import { DatabaseErrorResponse } from "@modules/server";

export const GET = async (req: Request) => {
  console.log("API", "Request URL", req.url);

  prisma.$connect();

  let filters = {};

  const { searchParams } = new URL(req.url);
  const categoryName = searchParams.get("categoryName");

  if (categoryName) {
    filters = Object.assign(filters, {
      where: { category: { name: categoryName } },
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
