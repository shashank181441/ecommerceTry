import React from 'react';

function Index({ cartItems }) {
  console.log(cartItems);
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cartItems.map((cartItem) => (
          <div key={cartItem.id} className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4">
            <img src={cartItem.product.mainImage} alt={cartItem.product.name} className="w-full h-48 object-cover mb-4 rounded-md" />
            <h2 className="text-lg font-semibold mb-2 text-white">{cartItem.product.name}</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-2">Quantity: {cartItem.count}</p>
            {/* <p className="text-gray-600 dark:text-gray-400">Owned by User: {cartItem.owner_id}</p> */}
          </div>
        ))}
      </div>
      <div className="flex justify-end mt-6">
        <button className="px-6 py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700">Checkout</button>
      </div>
    </div>
  );
}

export default Index;
