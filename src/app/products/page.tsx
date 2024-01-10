"use client";
import { UploadButton } from "../components/uploadthing";

import Image from "next/image";
import Link from "next/link";
import { ProductsCard } from "../components/products-card";

import { db } from "@/db";

export default async function ProductsPage({

	
	searchParams,
}: {
	searchParams: { [key: string]: string | string[] | undefined };
}) {
	const products = await db.product.findMany({
		where: {
			name: {
				contains: searchParams.name?.toString() ?? "",
			},
		},
	});

	return (

		<main className="flex min-h-screen flex-col items-center justify-between p-24">



<UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log("Files: ", res);
          alert("Upload Completed");
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />

    

		<ProductsCard>
			{products.map((product) => (
				<Link
					key={product.id}
					className="p-2 flex flex-col items-center gap-3 border border-gray-200"
					href={`/products/${product.id}`}
				>
					<Image
						alt={product.name}
						width={220}
						height={200}
						src={"/mock-products/ex1.jpeg"}
						style={{ borderRadius: "3%", maxHeight: "220px" }}
					/>
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

		</main>
	);
}
