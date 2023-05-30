import { NextResponse } from "next/server";
import { DatabaseErrorResponse } from "@modules/server";
import { getProducts } from "@modules/api/server";

export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url);

  const params = Array.from(searchParams.entries())
    .filter(([key, value]) => value && value !== "")
    .map(([key, value]) => [key, decodeURI(value)]);

  const filters = Object.fromEntries(params);

  try {
    const products = await getProducts(filters);

    return NextResponse.json({ data: products });
  } catch (err) {
    console.log(err);
    return new DatabaseErrorResponse();
  }
};
