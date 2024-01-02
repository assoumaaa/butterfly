"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Image from "next/image";
import React from "react";

type Product = {
  id: number;
  name: string;
  color: string;
  weightGSM: number;
  width: number;
  composition: string;
  code: string;
  manufacturingTime: string;
  stock: number;
  image: string;
};

type RowProductCardProps = {
  title: string;
  products: Product[];
};

export const RowProductCard: React.FC<RowProductCardProps> = ({
  title,
  products,
}) => {
  const renderProductList = (products: Product[]) => (
    <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
      {products.map((product, index) => (
        <li key={index}>
          <Image
            alt={product.name}
            width={220}
            height={200}
            src={product.image}
            style={{ borderRadius: "3%", maxHeight: "220px" }}
          />
          <h2 className="text-md mb-2">{product.name}</h2>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="overflow-hidden">
      <Card className="w-11/12 mx-auto my-9 flex flex-col">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription className="flex justify-between">
            <div className="flex md:gap-6"></div>
            <div className="flex items-center"></div>
          </CardDescription>
        </CardHeader>
        <CardContent className="overflow-auto flex-grow">
          <div className="flex space-x-4">
            {renderProductList(products)}
            {renderProductList(products)}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
