import {
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
	Dialog as UiDialog,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

// TO:DO - okButton to JSON, will include information about button colors etc,
// TO:DO - create a new AddProductDialog, that will use DialogComponent and this will be called in /products
// TO:DO - add a parameter like 'xl' or 'lg' that will make the dialog bigger, but also maintain the responsiveness

interface DialogProps {
	open?: boolean;
	okButton?: string;
	cancelButton?: string;
	title: string;
	description?: string;
	onPositiveClicked?: () => void;
	onNegativeClicked?: () => void;
	onOpenChange?: (open: boolean) => void;
	formId?: string;
	variant?:
		| "default"
		| "link"
		| "destructive"
		| "outline"
		| "secondary"
		| "ghost"
		| null
		| undefined;
	children?: React.ReactNode;
}

export function Dialog({
	open,
	okButton = "Add",
	cancelButton = "Cancel",
	title,
	description,
	onPositiveClicked,
	onNegativeClicked,
	onOpenChange,

	formId,
	variant = "default",
	children,
	...rest
}: DialogProps) {
	return (
		<UiDialog open={open} {...rest} onOpenChange={onOpenChange}>
			<DialogTrigger asChild>
				<Button variant="outline">{okButton}</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>{title}</DialogTitle>
					<DialogDescription>{description}</DialogDescription>
				</DialogHeader>
				{children}
				<DialogFooter>
					<Button
						type="submit"
						form={formId}
						onClick={() => onNegativeClicked?.()}
						variant={"secondary"}
					>
						{cancelButton}
					</Button>
					<Button
						type="submit"
						form={formId}
						onClick={() => onPositiveClicked?.()}
						variant={variant}
					>
						{okButton}
					</Button>
				</DialogFooter>
			</DialogContent>
		</UiDialog>
	);
}
