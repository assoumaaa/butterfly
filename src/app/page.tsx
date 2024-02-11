import Image from "next/image";
import Link from "next/link";
import { ProductsCard } from "./products/components/products-card";
import { db } from "@/db";
import { getImageUrl } from "@/lib/utils";
import { getProducts } from "@/actions/product/product";

export default async function ProductsPage({
	searchParams,
}: {
	searchParams: { [key: string]: string | string[] | undefined };
}) {
	const products = await getProducts(searchParams);

	return (
		<ProductsCard>
			{products.map((product) => (
				<Link
					key={product.id}
					className="p-2 flex flex-col items-center gap-3 border border-gray-200"
					href={`/products/${product.id}`}
				>
					<div className="relative" style={{ width: "220px", height: "240px" }}>
						<Image
							alt={product.name}
							src={getImageUrl(product?.image ?? "")}
							objectFit="cover"
							layout="fill"
							style={{ borderRadius: "3%" }}
						/>
					</div>
					<div className="flex flex-col items-center gap-3">
						<p className="text-sm">{product.code}</p>
						<div className="flex text-xs text-slate-400 gap-4">
							<p>{product.weightGSM} GSM</p>
							<p>{product.width} CM</p>
						</div>
						<div className="flex">
							{product.color.split(",").map((color, index) => (
								<span
									key={index}
									style={{ backgroundColor: color.trim() }}
									className="inline-block ml-2 w-4 h-4 rounded-full"
								/>
							))}
						</div>
					</div>
				</Link>
			))}
		</ProductsCard>
	);
}
