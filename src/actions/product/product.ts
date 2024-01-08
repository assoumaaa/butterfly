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

export async function deleteProduct(id: string) {
	await db.product.delete({
		where: {
			id: id,
		},
	});

	revalidatePath("/products");
}
