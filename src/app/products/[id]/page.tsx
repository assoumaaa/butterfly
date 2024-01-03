"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { products } from "../../../../public/products";
import { usePathname } from "next/navigation";

export default function ProductPage() {
  const id = usePathname().split("/")[2];
  const product = products.find((product) => product.id === parseInt(id));

  return (
    product && (
      <div className="flex h-screen w-screen  gap-8 p-6 flex-col md:flex-row md:p-0 md:w-11/12">
        <div className="flex-1 flex items-center justify-center">
          <Image
            width={500}
            height={500}
            alt="product"
            src={product.image}
            priority
            style={{ borderRadius: "3%" }}
          />
        </div>
        <div className="flex-1 flex flex-col justify-center">
          <div className="h-full gap-4 flex flex-col md:h-1/2">
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <Badge className="w-fit text-sm">{product.code}</Badge>
            <Separator className="my-3" />
            <span>
              <strong>Weight:</strong> {product.weightGSM} KG
            </span>
            <span>
              <strong>Width:</strong> {product.width} CM
            </span>
            <Separator className="my-3" />

            <h2 className="font-bold">COLOR</h2>
            <div>
              {product.color.split(",").map((color, index) => (
                <span
                  key={index}
                  style={{
                    backgroundColor: color.trim(),
                  }}
                  className="inline-block w-4 h-4  mr-4 rounded-full"
                />
              ))}
            </div>
            <h2 className="text-slate-600 text-xs">
              MANUFACTURING TIME: {product.manufacturingTime}
            </h2>

            <Button>RECOLOR</Button>
            <Button>3D DESIGN</Button>
          </div>
        </div>
      </div>
    )
  );
}

/*
  {
    id: 1,
    name: "Cotton T-Shirt",
    color: "DarkRed",
    weightGSM: 150,
    width: 30.5,
    composition: '{"Cotton": 70, "Polyester": 25, "Spandex": 5}',
    code: "CT1001",
    manufacturingTime: "2023-01-10T10:00:00Z",
    stock: 120.0,
    image: "/mock-products/ex1.jpeg",
  },
  
*/
