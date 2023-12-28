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
  buttonText: string;
  title: string;
  description?: string;
  onPositiveClicked?: () => void;
  okButton: string;
  children?: React.ReactNode;
}

export function Dialog({
  buttonText,
  title,
  description,
  onPositiveClicked,
  okButton,
  children,
}: DialogProps) {
  return (
    <UiDialog>
      <DialogTrigger asChild>
        <Button variant="outline">{buttonText}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        {children}
        <DialogFooter>
          <Button type="submit" onClick={() => onPositiveClicked?.()}>
            {okButton}
          </Button>
        </DialogFooter>
      </DialogContent>
    </UiDialog>
  );
}
