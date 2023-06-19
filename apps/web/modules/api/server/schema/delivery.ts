import z from "zod";

export const DeliveryMethodSchema = z.object({
  name: z.string(),
  price: z.number(),
});

export type DeliveryMethodSchemaType = z.infer<typeof DeliveryMethodSchema>;
