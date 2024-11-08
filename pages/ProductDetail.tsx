import React from 'react';
import { useRouter } from 'next/router';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Product 1",
    description: "Description of Product 1",
    price: 19.99,
    image: "/product1.jpg", // Replace with actual image path
  },
  {
    id: 2,
    name: "Product 2",
    description: "Description of Product 2",
    price: 29.99,
    image: "/product2.jpg", // Replace with actual image path
  },
  {
    id: 3,
    name: "Product 3",
    description: "Description of Product 3",
    price: 39.99,
    image: "/product3.jpg", // Replace with actual image path
  },
];

const ProductDetail: React.FC = () => {
  const router = useRouter();
  const productId = parseInt(router.query.id as string, 10);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>${product.price}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductDetail;
