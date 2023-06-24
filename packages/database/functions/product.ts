import { prisma } from "../client";
import { Prisma } from "@prisma/client";

export const getProduct = async (productId: number) => {
  return prisma.product.findUnique({
    where: {
      id: productId,
    },
    include: {
      category: true,
    },
  });
};

export const getProducts = async (
  categoryId: number | undefined,
  limit: number | undefined,
  offset: number | undefined
) => {
  let filters = {};

  if (categoryId) {
    filters = { ...filters, categoryId };
  }

  return prisma.product.findMany({
    where: filters,
    take: limit,
    skip: offset,
    include: {
      category: true,
    },
  });
};

export const saveProduct = async (productData: Prisma.ProductCreateInput) => {
  return prisma.product.create({
    data: productData,
  });
};

export const updateProduct = async (
  productId: number,
  updatedProductData: Prisma.ProductUpdateInput
) => {
  return prisma.product.update({
    where: {
      id: productId,
    },
    data: updatedProductData,
  });
};

export const deleteProduct = async (productId: number) => {
  return prisma.product.delete({
    where: {
      id: productId,
    },
  });
};
