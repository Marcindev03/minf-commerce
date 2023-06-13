import z from "zod";

const DeliveryInfoSchema = z.object({
  method: z.string(),
  price: z.string(),
  company: z.string().optional(),
  address: z.string(),
  city: z.string(),
  postcode: z.string(),
});

const OrderProductSchema = z.object({
  storage: z.string().optional(),
  storageId: z.number().optional(),
  productId: z.string(),
  variantId: z.number().optional(),
  location: z.string().optional(),
  name: z.string().optional(),
  sku: z.string().optional(),
  ean: z.string().optional(),
  priceBrutto: z.number().optional(),
  taxRate: z.number().optional(),
  quantity: z.number(),
  weight: z.number().optional(),
});

export const OrderSchema = z.object({
  phone: z.string(),
  email: z.string().email(),
  firstName: z.string(),
  lastName: z.string(),
  delivery: DeliveryInfoSchema,
  products: z.array(OrderProductSchema),
});

export type OrderSchemaType = z.infer<typeof OrderSchema>;
