import { NextResponse } from "next/server";
import { DatabaseErrorResponse } from "@modules/server";
import { getProducts } from "@minf-commerce/core";

export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url);

  const params = Array.from(searchParams.entries())
    .filter(([key, value]) => value && value !== "")
    .map(([key, value]) => {
      if (key === "ids") {
        const arrValue = value.split(",");
        return [key, arrValue];
      }

      return [key, decodeURI(value)];
    });

  const filters = Object.fromEntries(params);

  try {
    const { dbProducts } = await getProducts(filters);

    return NextResponse.json({
      data: dbProducts,
    });
  } catch (err) {
    console.log(err);
    return new DatabaseErrorResponse();
  }
};
