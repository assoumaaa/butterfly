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

import { Dialog } from "../dialog";
import { Input } from "@/components/ui/input";
import { addProduct } from "@/actions/product/product";
import { useForm } from "react-hook-form";
import { useToast } from "../ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";

const projectSchema = z.object({
	name: z.string().min(1, "Name is required"),
	color: z.string().min(1, "Color is required"),
	weightGSM: z.coerce.number().min(1, "Weight must be a positive number"),
	width: z.coerce.number().min(1, "Width must be a positive number"),
	composition: z.string(),
	code: z.string().min(1, "Product Code is required"),
});

export function AddProductDialog() {
	const { toast } = useToast();

	const form = useForm({
		resolver: zodResolver(projectSchema),
		defaultValues: {
			name: "",
			color: "",
			weightGSM: 0,
			width: 0,
			composition: "",
			code: "",
		},
	});

	function onSubmit(values: z.infer<typeof projectSchema>) {
		addProduct(values);
		toast({
			title: "Product Added!",
			description: "Product has been added to the database",
			className: "text-green-500",
		});
	}

	return (
		<Dialog
			title="Add Product"
			description="Add a new product to the database"
			buttonText="Add"
			okButton="Add"
			formId="add-product"
		>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					id="add-product"
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
		</Dialog>
	);
}
