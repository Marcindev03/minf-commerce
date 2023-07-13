import { Prisma } from "@prisma/client";
import { prisma } from "../client";

export const getCategory = async (categoryId: number) => {
  return prisma.category.findUnique({
    where: {
      id: categoryId,
    },
  });
};

export const getCategories = async () => {
  return prisma.category.findMany();
};

export const saveCategory = async (
  categoryData: Prisma.CategoryCreateInput
) => {
  return prisma.category.create({
    data: categoryData,
  });
};

export const updateCategory = async (
  categoryId: number,
  updatedCategoryData: Prisma.CategoryUpdateInput
) => {
  return prisma.category.update({
    where: {
      id: categoryId,
    },
    data: updatedCategoryData,
  });
};

export const deleteCategory = async (categoryId: number) => {
  return prisma.category.delete({
    where: {
      id: categoryId,
    },
  });
};
