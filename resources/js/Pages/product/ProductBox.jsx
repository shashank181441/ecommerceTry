import { Link } from '@inertiajs/react'
import React from 'react'

function ProductBox({product}) {

  return (
    <Link href={route("product.show", product.id)}
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
  </Link>
  )
}

export default ProductBox