import z from "zod";

const DeliveryInfoSchema = z.object({
  id: z.number(),
  company: z.string().optional(),
  street: z.string(),
  houseNumber: z.number(),
  flatNumber: z.number().optional(),
  city: z.string(),
  postcode: z.string(),
});

const OrderProductSchema = z.object({
  id: z.number(),
  quantity: z.number(),
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
