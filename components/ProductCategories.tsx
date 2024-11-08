import React from 'react';

const ProductCategories: React.FC = () => {
  return (
    <section className="container mx-auto grid grid-cols-3 gap-4 mt-8">
      <div className="bg-gray-100 p-6 rounded-lg">
        <h2>Skincare</h2>
      </div>
      <div className="bg-gray-100 p-6 rounded-lg">
        <h2>Fitness</h2>
      </div>
      <div className="bg-gray-100 p-6 rounded-lg">
        <h2>Accessories</h2>
      </div>
    </section>
  );
};

export default ProductCategories;
