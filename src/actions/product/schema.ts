import { z } from "zod";

export const ProductSchema = z.object({
	name: z.string(),
	color: z.string(),
	weightGSM: z.coerce.number(),
	width: z.coerce.number(),
	composition: z.any(),
	code: z.string(),
	image: z.string().optional(),
});

export type Product = z.infer<typeof ProductSchema>;
