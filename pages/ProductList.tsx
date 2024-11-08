import React from 'react';

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

const ProductList: React.FC = () => {
  return (
    <div>
      <h1>Product List</h1>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>${product.price}</p>
          <img src={product.image} alt={product.name} />
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
