import { defineSchema, defineTable } from "convex/server";

import { v } from "convex/values";

export default defineSchema({
	images: defineTable({
		productId: v.int64(),
		image: v.string(),
	}),
});
