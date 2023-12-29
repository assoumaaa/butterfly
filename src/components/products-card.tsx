"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { Dialog } from "@/components/dialog";
import { Input } from "@/components/ui/input";

type ProductsCardProps = {
  children: React.ReactNode;
};

export const ProductsCard: React.FC<ProductsCardProps> = ({ children }) => {
  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden">
      <div className="flex-grow overflow-auto">
        <Card className="w-11/12 mx-auto my-9 min-h-[92%] flex flex-col">
          <CardHeader>
            <CardTitle>Products</CardTitle>
            <CardDescription className="flex justify-between">
              <Input type="search" placeholder="Search" className="w-1/3" />
              <div className="flex md:gap-4 ">
                <Dialog
                  buttonText="Add"
                  title="Add Product"
                  okButton="Add"
                ></Dialog>
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
          <CardFooter className="flex justify-end mt-auto">
            <Button>
              See More <ArrowRightIcon />
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};
