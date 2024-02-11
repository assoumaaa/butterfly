import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function getImageUrl(imageId: string | undefined) {
	if (!imageId) {
		return "/mock-products/ex1.jpeg";
	}
	return `${process.env.NEXT_PUBLIC_CONVEX_URL}/api/storage/${imageId}`;
}
