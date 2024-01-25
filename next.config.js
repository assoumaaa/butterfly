const { hostname } = require("os");

/** @type {import('next').NextConfig} */
const nextConfig = {
	transpilePackages: ["three"],
	images: {
		remotePatterns: [
			{
				hostname: "wonderful-husky-122.convex.cloud",
			},
		],
	},
};

module.exports = nextConfig;
