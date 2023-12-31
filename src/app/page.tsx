import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { RowProductCard } from "@/components/RowProductCard";

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

export default function Home() {
  return (
    <main>
      <RowProductCard title="Best Sellers" products={products} />
      <RowProductCard title="Jaquard Collection" products={products} />

      <RowProductCard title="Winter Collection" products={products} />

      <RowProductCard title="Summer Collection" products={products} />




    
    </main>
  );
}
