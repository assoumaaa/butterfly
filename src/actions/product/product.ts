"use server";

import { Product, ProductSchema } from "./schema";

import { api } from "../../../convex/_generated/api";
import { db } from "@/db";
import { fetchQuery } from "convex/nextjs";
import { revalidatePath } from "next/cache";

export async function getProducts(searchParams: {
	[key: string]: string | string[] | undefined;
}) {
	const products = await db.product.findMany({
		where: {
			name: {
				contains: searchParams.name?.toString() ?? "",
			},
		},
	});

	const productsWithImages = await Promise.all(
		products.map(async (product) => {
			const image = await fetchQuery(api.images.getImage, {
				productId: product.id,
			});
			return {
				...product,
				image: image,
			};
		})
	);

	return productsWithImages;
}

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

	revalidatePath("/");
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

	const image = await fetchQuery(api.images.getImage, { productId: id });

	const productWithImage = {
		...product,
		image: image ?? "",
	};

	return ProductSchema.parse(productWithImage);
}
