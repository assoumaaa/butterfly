import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { db } from "@/db";
import { usePathname } from "next/navigation";

export default async function ProductPage({
	params,
}: {
	params: { id: string };
}) {
	const { id } = params;
	const product = await db.product.findUnique({
		where: {
			id: id,
		},
	});

	return (
		product && (
			<div className="flex h-screen w-screen  gap-8 p-6 flex-col md:flex-row md:p-0 md:w-11/12">
				<div className="flex-1 flex items-center justify-end">
					<Image
						width={500}
						height={500}
						alt="product"
						src={"/mock-products/ex1.jpeg"}
						priority
						style={{ borderRadius: "3%" }}
					/>
				</div>
				<div className="flex-1 flex flex-col justify-center">
					<div className="h-full gap-4 flex flex-col md:h-1/2">
						<h1 className="text-3xl font-bold">{product.name}</h1>
						<Badge className="w-fit text-sm">{product.code}</Badge>
						<Separator className="my-3" />
						<span>
							<strong>Weight:</strong> {product.weightGSM} KG
						</span>
						<span>
							<strong>Width:</strong> {product.width} CM
						</span>
						<Separator className="my-3" />

						<h2 className="font-bold">COLOR</h2>
						<div>
							{product.color.split(",").map((color, index) => (
								<span
									key={index}
									style={{
										backgroundColor: color.trim(),
									}}
									className="inline-block w-4 h-4  mr-4 rounded-full"
								/>
							))}
						</div>
						<Separator className="my-3" />
						<Button>RECOLOR</Button>
						<Button>3D DESIGN</Button>
					</div>
				</div>
			</div>
		)
	);
}
