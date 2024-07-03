import { useForm } from '@inertiajs/react';
import React, { useState } from 'react';

function Show({ product }) {
    const { data, setData, post, errors, reset } = useForm({
        count: 1,
        product_id: product.id,
        buyer_id: 1
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        post(route("cart.store"));
    };

    return (
        <div className="max-w-2xl mx-auto mt-8 p-6 bg-white shadow-md rounded-lg">
            <div className="flex items-center justify-between mb-4">
                <img src={product.mainImage} alt={product.name} className="w-64 h-auto rounded-lg" />
                <div className="ml-4">
                    <h1 className="text-2xl font-bold">{product.name}</h1>
                    <p className="text-gray-700">{product.description}</p>
                    <p className="text-gray-800 font-semibold">${product.price}</p>
                </div>
            </div>
            <div className="flex items-center">
                <button disabled={data.count===0}
                    onClick={() => setData("count", data.count - 1)}
                    className="px-4 py-2 bg-gray-200 hover:bg-gray-300 disabled:bg-gray-200 rounded-lg mr-2"
                >
                    -
                </button>
                <span className="text-xl">{data.count}</span>
                <button
                    onClick={() => setData("count", data.count + 1)}
                    className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg ml-2"
                >
                    +
                </button>
            </div>
            <form onSubmit={handleSubmit} className="mt-4">
                <button
                    type="submit"
                    className="block w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg mt-4"
                >
                    Add to Cart
                </button>
            </form>
        </div>
    );
}

export default Show;
