"use client";

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { usePathname, useSearchParams } from "next/navigation";

import { AddProductDialog } from "./add-product-dialog";
import { Dialog } from "@/components/dialog";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

type ProductsCardProps = {
	children: React.ReactNode;
	noTitle?: boolean;
};

export const ProductsCard: React.FC<ProductsCardProps> = ({ children }) => {
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const { replace } = useRouter();

	const handleSearch = (term: string) => {
		const params = new URLSearchParams(searchParams);
		if (term) {
			params.set("name", term);
		} else {
			params.delete("name");
		}
		replace(`${pathname}?${params.toString()}`);
	};

	return (
		<div className="flex flex-col h-screen w-screen overflow-hidden">
			<div className="flex-grow overflow-auto">
				<Card className="w-11/12 mx-auto my-9 min-h-[92%] flex flex-col">
					<CardHeader>
						<CardTitle>Products</CardTitle>
						<CardDescription className="flex justify-between">
							<Input
								type="search"
								placeholder="Search"
								onChange={(event) => handleSearch(event.target.value)}
								defaultValue={searchParams?.get("name".toString()) ?? ""}
								className="w-1/3"
							/>
							<div className="flex md:gap-4 ">
								<AddProductDialog />
								<Dialog
									buttonText="Compare"
									title="Compare Products"
									okButton="Compare"
								></Dialog>
							</div>
						</CardDescription>
					</CardHeader>
					<CardContent className="overflow-auto">
						<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
							{children}
						</div>
					</CardContent>
					<CardFooter className="flex justify-end mt-auto"></CardFooter>
				</Card>
			</div>
		</div>
	);
};
