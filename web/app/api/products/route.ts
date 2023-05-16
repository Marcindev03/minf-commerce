import { NextResponse } from "next/server";
import { prisma } from "@modules/databse";
import { DatabaseErrorResponse } from "@modules/server";
import { getProducts } from "@modules/api/server";

export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url);

  const category = searchParams.get("category");
  const limit = searchParams.get("limit");
  // const ids = searchParams.get("ids")?.split(",") ?? [];

  try {
    const products = await getProducts({
      categoryName: category ? decodeURI(category) : undefined,
      limit: limit ? +limit : undefined,
    });

    return NextResponse.json({ data: products });
  } catch (err) {
    console.log(err);
    return new DatabaseErrorResponse();
  } finally {
    prisma.$disconnect();
  }
};
