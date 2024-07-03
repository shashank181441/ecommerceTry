import { Link } from "@inertiajs/react";
import ProductBox from "./ProductBox";

export default function Index({ products = [] }) {
  console.log(products);
  return (
    <>
    <div className="flex justify-between mx-4  my-8">
      <h1 className="text-2xl font-bold text-center">All products</h1>
      <Link href={route('product.create')} className="bg-green-800 text-white px-3 py-1 rounded">New</Link></div>
      <div className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
        <ProductBox product={product} key={product.id}/>
        ))}
      </div>
    </>
  );
}
