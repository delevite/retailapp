import React from 'react';
import { Product } from '../types/Product';
import ProductList from './ProductList';

interface FeaturedProductsProps {
  products: Product[];
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ products }) => {
  return (
    <section className="container mx-auto mt-12">
      <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
      <ProductList products={products} />
    </section>
  );
};

export default FeaturedProducts;
