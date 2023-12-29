import Image from "next/image";
import { ProductsCard } from "@/components/products-card";

const products = [
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
  {
    id: 2,
    name: "Polyester Shirt",
    color: "DarkGreen, Grey",
    weightGSM: 100,
    width: 25.0,
    composition: '{"Cotton": 30, "Polyester": 65, "Spandex": 5}',
    code: "PS2002",
    manufacturingTime: "2023-02-15T10:00:00Z",
    stock: 90.0,
    image: "/mock-products/ex2.jpeg",
  },
  {
    id: 3,
    name: "Spandex Pants",
    color: "Black,yellow",
    weightGSM: 200,
    width: 40.0,
    composition: '{"Cotton": 50, "Polyester": 30, "Spandex": 20}',
    code: "SP3003",
    manufacturingTime: "2023-03-20T10:00:00Z",
    stock: 150.0,
    image: "/mock-products/ex3.jpeg",
  },
  {
    id: 4,
    name: "Spandex Pants",
    color: "brown",
    weightGSM: 200,
    width: 40.0,
    composition: '{"Cotton": 50, "Polyester": 30, "Spandex": 20}',
    code: "SP3003",
    manufacturingTime: "2023-03-20T10:00:00Z",
    stock: 150.0,
    image: "/mock-products/ex4.jpeg",
  },
  {
    id: 4,
    name: "Spandex Pants",
    color: "gray",
    weightGSM: 200,
    width: 40.0,
    composition: '{"Cotton": 50, "Polyester": 30, "Spandex": 20}',
    code: "SP3003",
    manufacturingTime: "2023-03-20T10:00:00Z",
    stock: 150.0,
    image: "/mock-products/ex5.jpeg",
  },
];

export default function ProductsPage() {
  return (
    <ProductsCard>
      {products.map((product) => (
        <div
          key={product.id}
          className="p-2 flex flex-col items-center gap-3 border border-gray-200"
        >
          <Image
            alt={product.name}
            width={220}
            height={200}
            src={product.image}
            style={{ borderRadius: "3%", maxHeight: "220px" }}
          />
          <div className="flex flex-col items-center gap-3">
            <p className="text-sm">{product.code}</p>
            <div className="flex text-xs text-slate-400 gap-4">
              <p>{product.weightGSM} KG</p>
              <p>{product.width} CM</p>
            </div>
            <div className="flex">
              {product.color.split(",").map((color, index) => (
                <span
                  key={index}
                  style={{ backgroundColor: color.trim() }}
                  className="inline-block ml-2 w-4 h-4 rounded-full"
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </ProductsCard>
  );
}
