import { defineSchema, defineTable } from "convex/server";

import { v } from "convex/values";

export default defineSchema({
	images: defineTable({
        image: v.string(),
		productId: v.string(),
	}),
});
