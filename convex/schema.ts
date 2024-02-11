import { defineSchema, defineTable } from "convex/server";

import { v } from "convex/values";

export default defineSchema({
	images: defineTable({
        imageId: v.string(),
		productId: v.string(),
	}),
});
