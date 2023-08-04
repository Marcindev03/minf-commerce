import { Request, Response } from "express";
import { ProductParams } from "../../types/product";
import { saveProduct } from "@minf-commerce/database";

const convertProductParamsToProduct = (params: ProductParams) => ({
  ...params,
  baselinkerProductId: params.product_id,
  quantity: +params.quantity,
  price: parseFloat(params.price),
  tax: parseFloat(params.tax),
  weight: parseFloat(params.weight),
  height: parseFloat(params.height),
  length: parseFloat(params.length),
  width: parseFloat(params.width),
  manName: params.man_name,
  baselinkerCategoryId: params.category_id,
  category: {
    connect: { baselinkerCategoryId: +params.category_id },
  },
});

export const productAddHandler = async (
  req: Request,
  res: Response,
  params: ProductParams
) => {
  const product = convertProductParamsToProduct(params);

  try {
    const { id } = await saveProduct(product);

    return res.json({ product_id: id.toString() });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ status: 500, message: err });
  }
};
