import React from 'react';
import Link from 'next/link';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

const products: Product[] = [
  { id: 1, title: 'Product 1', description: 'Description 1', price: 19.99, image: '/product1.jpg' },
  { id: 2, title: 'Product 2', description: 'Description 2', price: 29.99, image: '/product2.jpg' },
  { id: 3, title: 'Product 3', description: 'Description 3', price: 39.99, image: '/product3.jpg' },
];

const ProductList: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <Link href={`/product/${product.id}`} key={product.id}>
          <a className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg">
            <img src={product.image} alt={product.title} className="w-full h-48 object-cover mb-2" />
            <h3 className="text-lg font-medium mb-1">{product.title}</h3>
            <p className="text-gray-600 text-sm mb-2">{product.description}</p>
            <p className="text-lg font-bold">&#36;{product.price.toFixed(2)}</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add to Cart</button>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default ProductList;
