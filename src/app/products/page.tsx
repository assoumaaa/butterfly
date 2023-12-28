import { ProductsCard } from "@/components/products-card";

const products = [
  {
    id: 1,
    name: "Cotton T-Shirt",
    color: "Red",
    weightGSM: 150,
    width: 30.5,
    composition: '{"Cotton": 70, "Polyester": 25, "Spandex": 5}',
    code: "CT1001",
    manufacturingTime: "2023-01-10T10:00:00Z",
    stock: 120.0,
  },
  {
    id: 2,
    name: "Polyester Shirt",
    color: "Blue",
    weightGSM: 100,
    width: 25.0,
    composition: '{"Cotton": 30, "Polyester": 65, "Spandex": 5}',
    code: "PS2002",
    manufacturingTime: "2023-02-15T10:00:00Z",
    stock: 90.0,
  },
  {
    id: 3,
    name: "Spandex Pants",
    color: "Black",
    weightGSM: 200,
    width: 40.0,
    composition: '{"Cotton": 50, "Polyester": 30, "Spandex": 20}',
    code: "SP3003",
    manufacturingTime: "2023-03-20T10:00:00Z",
    stock: 150.0,
  },
  {
    id: 4,
    name: "Spandex Pants",
    color: "Black",
    weightGSM: 200,
    width: 40.0,
    composition: '{"Cotton": 50, "Polyester": 30, "Spandex": 20}',
    code: "SP3003",
    manufacturingTime: "2023-03-20T10:00:00Z",
    stock: 150.0,
  },
  {
    id: 5,
    name: "Spandex Pants",
    color: "Black",
    weightGSM: 200,
    width: 40.0,
    composition: '{"Cotton": 50, "Polyester": 30, "Spandex": 20}',
    code: "SP3003",
    manufacturingTime: "2023-03-20T10:00:00Z",
    stock: 150.0,
  },
  {
    id: 6,
    name: "Spandex Pants",
    color: "Black",
    weightGSM: 200,
    width: 40.0,
    composition: '{"Cotton": 50, "Polyester": 30, "Spandex": 20}',
    code: "SP3003",
    manufacturingTime: "2023-03-20T10:00:00Z",
    stock: 150.0,
  },
  {
    id: 7,
    name: "Spandex Pants",
    color: "Black",
    weightGSM: 200,
    width: 40.0,
    composition: '{"Cotton": 50, "Polyester": 30, "Spandex": 20}',
    code: "SP3003",
    manufacturingTime: "2023-03-20T10:00:00Z",
    stock: 150.0,
  },
  {
    id: 8,
    name: "Spandex Pants",
    color: "Black",
    weightGSM: 200,
    width: 40.0,
    composition: '{"Cotton": 50, "Polyester": 30, "Spandex": 20}',
    code: "SP3003",
    manufacturingTime: "2023-03-20T10:00:00Z",
    stock: 150.0,
  },
  {
    id: 9,
    name: "Spandex Pants",
    color: "Black",
    weightGSM: 200,
    width: 40.0,
    composition: '{"Cotton": 50, "Polyester": 30, "Spandex": 20}',
    code: "SP3003",
    manufacturingTime: "2023-03-20T10:00:00Z",
    stock: 150.0,
  },
];

export default function ProductsPage() {
  return (
    <ProductsCard>
      {products.map((product) => (
        <div key={product.id} className="border border-gray-200 p-4">
          <h2 className="text-md mb-2">{product.name}</h2>
          <img
            src="https://via.placeholder.com/150"
            alt={product.name}
            className="mb-2"
          />
        </div>
      ))}
    </ProductsCard>
  );
}
