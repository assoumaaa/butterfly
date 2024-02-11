import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { VerticalThreeDots } from "@/components/veritcal-three-dots";
import { getImageUrl } from "@/lib/utils";
import { getProduct } from "@/actions/product/product";

export default async function ProductPage({
	params,
}: {
	params: { id: string };
}) {
	const { id } = params;

	const product = await getProduct(id);

	return (
		product && (
			<div className="flex h-screen w-screen gap-8 p-6">
				<div className="flex-1 flex items-center justify-end">
					<Image
						width={500}
						height={500}
						alt="product"
						src={getImageUrl(product.image)}
						priority
						style={{ borderRadius: "3%" }}
					/>
				</div>
				<div className="flex-1 flex flex-col justify-center relative">
					<div className="h-full gap-4 flex flex-col md:h-1/2">
						<div className="flex justify-between">
							<h1 className="text-3xl font-bold">{product.name}</h1>
							<VerticalThreeDots id={id} />
						</div>
						<Badge className="w-fit text-sm">{product.code}</Badge>
						<Separator className="my-3" />
						<span>
							<strong>Weight:</strong> {product.weightGSM} GSM
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
						<Button className="w-1/2">3D DESIGN</Button>
					</div>
				</div>
			</div>
		)
	);
}
