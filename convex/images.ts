"use server";

import { mutation } from "./_generated/server";
import { query } from "./_generated/server";
import { v } from "convex/values";

export const addImage = mutation({
	args: {
		imageId: v.string(),
		productId: v.string(),
	},
	handler: async (ctx, args) => {
		return await ctx.db.insert("images", {
			imageId: args.imageId,
			productId: args.productId,
		});
	},
});

export const getImage = query({
	args: {
		productId: v.string(),
	},
	handler: async (ctx, args) => {
		const image = await ctx.db
			.query("images")
			.filter((q) => q.eq(q.field("productId"), args.productId))
			.first();

		if (!image) {
			return null;
		}

		return image.imageId;
	},
});
