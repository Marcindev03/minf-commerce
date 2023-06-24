import { Request, Response } from "express";
import {
  FILE_VERSION,
  SUPPORTED_METHODS,
  SUPPORTED_METHODS_ARRAY,
  SupportedMethods,
} from "../config/general";
import { productAddHandler } from "../modules/products";
import { ProductParams } from "../types/product";
import { CategoryParams } from "../types/category";
import { categoryAddHandler } from "../modules/category";

export const globalHandler = async (
  req: Request,
  res: Response,
  method: SupportedMethods,
  params: {} | ProductParams
) => {
  switch (method) {
    case SUPPORTED_METHODS.FileVersion:
      return res.json(FILE_VERSION);
    case SUPPORTED_METHODS.SupportedMethods:
      return res.json(SUPPORTED_METHODS_ARRAY);
    case SUPPORTED_METHODS.ProductAdd:
      return await productAddHandler(req, res, params as ProductParams);
    case SUPPORTED_METHODS.CategoryAdd:
      return await categoryAddHandler(req, res, params as CategoryParams);
    default:
      return res.status(404).json({ message: "Action Not Found" });
  }
};
