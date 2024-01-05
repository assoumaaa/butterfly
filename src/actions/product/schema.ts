import { z } from "zod";

export const ProductSchema = z.object({
	name: z.string(),
	color: z.string(),
	weightGSM: z.coerce.number(),
	width: z.coerce.number(),
	composition: z.string(),
	code: z.string(),
});

export type Product = z.infer<typeof ProductSchema>;
