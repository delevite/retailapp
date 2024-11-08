import React from 'react';
import { useRouter } from 'next/router';

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

const ProductDetail: React.FC = () => {
  const router = useRouter();
  const productId = parseInt(router.query.id as string, 10);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="p-4">
      <img src={product.image} alt={product.title} className="w-full h-64 object-cover mb-4" />
      <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
      <p className="text-gray-600 mb-4">{product.description}</p>
      <p className="text-xl font-bold mb-4">&#36;{product.price.toFixed(2)}</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add to Cart</button>
    </div>
  );
};

export default ProductDetail;
