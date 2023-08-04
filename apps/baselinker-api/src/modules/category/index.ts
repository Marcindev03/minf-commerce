import { Request, Response } from "express";
import { CategoryParams } from "../../types/category";
import { saveCategory } from "@minf-commerce/database";

export const categoryAddHandler = async (
  req: Request,
  res: Response,
  params: CategoryParams
) => {
  const category = { name: params.name };

  try {
    const { id } = await saveCategory(category);
    return res.json({ category_id: id.toString() });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ status: 500, message: err });
  }
};
