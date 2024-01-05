"use server";

import { Product, ProductSchema } from "./schema";

import { db } from "@/db";
import { revalidatePath } from "next/cache";

export async function addProduct(productInfo: Product) {
	const product = ProductSchema.parse(productInfo);

	await db.product.create({
		data: product,
	});

	revalidatePath("/products");
}
