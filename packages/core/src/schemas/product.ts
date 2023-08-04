import { z } from "zod";

export const ProductSchema = z.object({
  id: z.number().nonnegative().int(),
  createdAt: z.date(),
  updatedAt: z.date(),
  baselinkerProductId: z.string(),
  sku: z.string(),
  ean: z.string(),
  name: z.string(),
  quantity: z.number().nonnegative().int(),
  price: z.number().nonnegative(),
  tax: z.number().nonnegative(),
  weight: z.number().nonnegative(),
  height: z.number().nonnegative(),
  length: z.number().nonnegative(),
  width: z.number().nonnegative(),
  description: z.string(),
  descriptionExtra1: z.string().optional(),
  descriptionExtra2: z.string().optional(),
  descriptionExtra3: z.string().optional(),
  descriptionExtra4: z.string().optional(),
  manName: z.string(),
  baselinkerCategoryId: z.string(),
  images: z.array(z.string()),
  features: z.any(), // or specify a more specific schema depending on the shape of `features`
  categoryId: z.number().nonnegative().int(),
});

export type ProductSchemaType = z.infer<typeof ProductSchema>;
