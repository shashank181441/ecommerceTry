import { Link } from "@inertiajs/react";

export default function Index({ products = [] }) {
  console.log(products);
  return (
    <>
    <div className="flex justify-between mx-4  my-8">
      <h1 className="text-2xl font-bold text-center">All products</h1>
      <Link href={route('product.create')} className="bg-green-800 text-white px-3 py-1 rounded">New</Link></div>
      <div className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center"
          >
            <img
              src={product.mainImage}
              alt={product.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-700 mb-4">{product.description}</p>
            <div className="text-lg font-bold text-indigo-600 mb-4">
              ${product.price}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
