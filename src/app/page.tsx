import { RowProductCard } from "@/components/product/row-products-card";
import { products } from "../../public/products";

export default function Home() {
	return (
		<main>
			<RowProductCard title="Best Sellers" products={products} />
			<RowProductCard title="Jaquard Collection" products={products} />
			<RowProductCard title="Winter Collection" products={products} />
			<RowProductCard title="Summer Collection" products={products} />
		</main>
	);
}
