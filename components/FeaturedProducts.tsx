import React from 'react';
import { Product } from '../types/Product';
import ProductList from './ProductList';

interface FeaturedProductsProps {
  products: Product[];
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ products }) => {
  return (
    <section className="featured-products p-6">
      <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="product-card bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={product.image} alt={product.title} className="w-full h-40 object-cover"/>
            <div className="p-4">
              <h3 className="text-xl font-bold">{product.title}</h3>
              <p className="mt-2 text-gray-600">${product.price.toFixed(2)}</p>
              <button className="mt-4 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition duration-300">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
