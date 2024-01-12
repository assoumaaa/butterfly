"use client";

import * as z from "zod";

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { editProduct, getProduct } from "@/actions/product/product";
import { useEffect, useMemo, useState } from "react";

import { Dialog } from "../../../components/dialog";
import { Input } from "@/components/ui/input";
import { LoadingSpinner } from "@/components/loading-spinner";
import { useForm } from "react-hook-form";
import { usePathname } from "next/navigation";
import { useToast } from "../../../components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";

const productSchema = z.object({
	name: z.string().min(1, "Name is required"),
	color: z.string().min(1, "Color is required"),
	weightGSM: z.coerce.number().min(1, "Weight must be a positive number"),
	width: z.coerce.number().min(1, "Width must be a positive number"),
	composition: z.optional(z.any()),
	code: z.string().min(1, "Product Code is required"),
});

export function EditProductDialog({
	open,
	onOpenChange,
}: {
	open: boolean;
	onOpenChange: (open: boolean) => void;
}) {
	const { toast } = useToast();
	const pathname = usePathname();
	const id = pathname.split("/products/")[1];

	const [isLoading, setIsLoading] = useState(true);

	const form = useForm({
		resolver: zodResolver(productSchema),
		defaultValues: {
			name: "",
			color: "",
			weightGSM: 0,
			width: 0,
			composition: "",
			code: "",
		},
	});

	useEffect(() => {
		const getCurrentProduct = async () => {
			setIsLoading(true);
			try {
				const product = await getProduct(id);
				if (product) {
					form.reset(product);
				}
			} finally {
				setIsLoading(false);
			}
		};
		getCurrentProduct();
	}, [id]);

	function onSubmit(values: z.infer<typeof productSchema>) {
		editProduct(values, id);
		onOpenChange(false);
		toast({
			title: "Product Edited!",
			className: "text-green-500",
		});
	}

	return (
		<Dialog
			open={open}
			onOpenChange={onOpenChange}
			title="Edit Product"
			description="Edit product's information"
			okButton="Save"
			formId="edit-product"
			noTrigger
		>
			{isLoading ? (
				<div className="flex items-center justify-center h-96">
					<LoadingSpinner />
				</div>
			) : (
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						id="edit-product"
						className="space-y-2 p-5"
					>
						<FormField
							control={form.control}
							name="name"
							render={({ field, fieldState }) => (
								<FormItem>
									<FormLabel>Name</FormLabel>
									<FormControl>
										<Input {...field} />
									</FormControl>
									<FormMessage>{fieldState.error?.message}</FormMessage>
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="color"
							render={({ field, fieldState }) => (
								<FormItem>
									<FormLabel>Color</FormLabel>
									<FormControl>
										<Input {...field} />
									</FormControl>
									<FormMessage>{fieldState.error?.message}</FormMessage>
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="weightGSM"
							render={({ field, fieldState }) => (
								<FormItem>
									<FormLabel>Weight (GSM)</FormLabel>
									<FormControl>
										<Input type="number" {...field} />
									</FormControl>
									<FormMessage>{fieldState.error?.message}</FormMessage>
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="width"
							render={({ field, fieldState }) => (
								<FormItem>
									<FormLabel>Width</FormLabel>
									<FormControl>
										<Input type="number" {...field} />
									</FormControl>
									<FormMessage>{fieldState.error?.message}</FormMessage>
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="composition"
							render={({ field, fieldState }) => (
								<FormItem>
									<FormLabel>Composition</FormLabel>
									<FormControl>
										<Input {...field} />
									</FormControl>
									<FormMessage>{fieldState.error?.message}</FormMessage>
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="code"
							render={({ field, fieldState }) => (
								<FormItem>
									<FormLabel>Product Code</FormLabel>
									<FormControl>
										<Input {...field} />
									</FormControl>
									<FormMessage>{fieldState.error?.message}</FormMessage>
								</FormItem>
							)}
						/>
					</form>
				</Form>
			)}
		</Dialog>
	);
}
