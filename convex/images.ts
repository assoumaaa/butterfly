import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const addImage = mutation({
	args: {
		image: v.string(),
		productId: v.string(),
	},
	handler: async (ctx, args) => {
		await ctx.db.insert("images", {
			image: args.image,
			productId: args.productId,
		});
	},
});
