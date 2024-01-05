"use server";

import { Product, ProductSchema } from "./schema";

import { db } from "@/db";

export async function addProduct(productInfo: Product) {
	const product = ProductSchema.parse(productInfo);

	return await db.product.create({
		data: product,
	});
}
