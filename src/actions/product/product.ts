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

export async function editProduct(productInfo: Product, id: string) {
	const product = ProductSchema.partial().parse(productInfo);

	await db.product.update({
		where: {
			id: id,
		},
		data: product,
	});

	revalidatePath(`/products/${id}`);
	revalidatePath("/products");
}

export async function getProduct(id: string) {
	const product = await db.product.findUnique({
		where: {
			id: id,
		},
	});

	return ProductSchema.parse(product);
}
