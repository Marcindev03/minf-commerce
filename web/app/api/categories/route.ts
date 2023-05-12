import { NextResponse } from "next/server";
import { prisma } from "@modules/databse";
import { DatabaseErrorResponse } from "@modules/server";
import { getCategories } from "@modules/api/server";

export const GET = async () => {
  try {
    const categories = await getCategories();

    return NextResponse.json({ data: categories });
  } catch (err) {
    return new DatabaseErrorResponse();
  } finally {
    prisma.$disconnect;
  }
};
