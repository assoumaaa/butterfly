"use client";

import * as React from "react";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";
import { Dialog } from "./dialog";
import { DotsVerticalIcon } from "@radix-ui/react-icons";
import { EditProductDialog } from "@/app/products/components/edit-product-dialog";
import { deleteProduct } from "@/actions/product/product";
import { useRouter } from "next/navigation";
import { useToast } from "./ui/use-toast";

export function VerticalThreeDots({ id }: { id: string }) {
	const { toast } = useToast();
	const router = useRouter();

	const [deleteDialog, setDeleteDialog] = React.useState(false);
	const [editDialog, setEditDialog] = React.useState(false);

	const handleDeleteProduct = () => {
		deleteProduct(id);
		setDeleteDialog(false);
		router.push("/products");
		toast({
			title: "Product Deleted!",
			description: "Product has been deleted from the database",
			variant: "destructive",
		});
	};

	return (
		<>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button variant={"ghost"} size="icon">
						<DotsVerticalIcon className="h-[1.2rem] w-[1.2rem]" />
						<span className="sr-only">Product options</span>
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align="end">
					<DropdownMenuItem onClick={() => setEditDialog(true)}>
						Edit
					</DropdownMenuItem>
					<DropdownMenuItem onClick={() => setDeleteDialog(true)}>
						Delete
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
			{deleteDialog && (
				<Dialog
					open={deleteDialog}
					title="Delete this product?"
					description="This will permanently delete this product from your store."
					okButton="Delete"
					cancelButton="Cancel"
					onPositiveClicked={handleDeleteProduct}
					onNegativeClicked={() => setDeleteDialog(false)}
					variant={"destructive"}
					onOpenChange={setDeleteDialog}
					noTrigger
				/>
			)}
			{editDialog && (
				<EditProductDialog open={editDialog} onOpenChange={setEditDialog} />
			)}
		</>
	);
}
