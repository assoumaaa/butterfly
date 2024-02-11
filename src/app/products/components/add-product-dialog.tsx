"use client";

import "@xixixao/uploadstuff/react/styles.css";

import * as z from "zod";

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { UploadButton, UploadFileResponse } from "@xixixao/uploadstuff/react";

import { Dialog } from "../../../components/dialog";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { addProduct } from "@/actions/product/product";
import { api } from "../../../../convex/_generated/api";
import { getImageUrl } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { useMutation } from "convex/react";
import { useState } from "react";
import { useToast } from "../../../components/ui/use-toast";
import { v4 } from "uuid";
import { zodResolver } from "@hookform/resolvers/zod";

const projectSchema = z.object({
	name: z.string().min(1, "Name is required"),
	color: z.string().min(1, "Color is required"),
	weightGSM: z.coerce.number().min(1, "Weight must be a positive number"),
	width: z.coerce.number().min(1, "Width must be a positive number"),
	composition: z.string(),
	code: z.string().min(1, "Product Code is required"),
});

export function AddProductDialog({
	open,
	onOpenChange,
}: {
	open: boolean;
	onOpenChange: (open: boolean) => void;
}) {
	const { toast } = useToast();

	const [image, setImage] = useState("");
	const [isUploading, setIsUploading] = useState(false);

	const generateUploadUrl = useMutation(api.files.generateUploadUrl);
	const addImage = useMutation(api.images.addImage);

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
		if (isUploading) {
			toast({
				title: "Image Uploading",
				description: "Please wait until the image has finished uploading.",
				className: "text-orange-500",
			});
			return;
		}

		// TO:DO ID SAVED TO ADD IMAGE IS DIFFERENT THEN ID STORED IN MYSQL DB!
		const id = v4();
		const valuesWithId = { ...values, id: id };

		addProduct(valuesWithId);
		addImage({ imageId: image, productId: id });

		onOpenChange(false);
		toast({
			title: "Product Added!",
			description: "Product has been added to the database",
			className: "text-green-500",
		});
	}

	return (
		<Dialog
			open={open}
			title="Add Product"
			description="Add a new product to the database"
			formId="add-product"
			onOpenChange={onOpenChange}
			onNegativeClicked={() => onOpenChange(false)}
		>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					id="add-product"
					className="flex items-center justify-center w-full"
				>
					<div className="space-y-2 p-5 flex-1">
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
					</div>
					<div className="flex flex-1 items-center justify-center ">
						{!image ? (
							<UploadButton
								uploadUrl={generateUploadUrl}
								fileTypes={["image/*"]}
								onUploadBegin={() => setIsUploading(true)}
								onUploadComplete={async (uploaded: UploadFileResponse[]) => {
									setImage((uploaded[0].response as any).storageId);
									setIsUploading(false);
								}}
								onUploadError={(error: unknown) => {
									alert(`ERROR! ${error}`);
									setIsUploading(false);
								}}
							/>
						) : (
							<Image
								src={getImageUrl(image)}
								width={500}
								height={500}
								style={{ borderRadius: "3%" }}
								alt="Product Image"
							/>
						)}
					</div>
				</form>
			</Form>
		</Dialog>
	);
}
