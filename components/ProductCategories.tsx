import React from 'react';

const ProductCategories: React.FC = () => {
  return (
    <section className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      <div className="category-card bg-white shadow-lg rounded-lg overflow-hidden">
        <img src="/images/skincare.jpg" alt="Skincare" className="w-full h-40 object-cover"/>
        <div className="p-4">
          <h2 className="text-xl font-bold">Skincare</h2>
          <p className="mt-2 text-gray-600">Explore our range of skincare products designed to rejuvenate your skin.</p>
        </div>
      </div>
      <div className="category-card bg-white shadow-lg rounded-lg overflow-hidden">
        <img src="/images/fitness.jpg" alt="Fitness" className="w-full h-40 object-cover"/>
        <div className="p-4">
          <h2 className="text-xl font-bold">Fitness</h2>
          <p className="mt-2 text-gray-600">Find the perfect fitness gear to help you achieve your goals.</p>
        </div>
      </div>
      <div className="category-card bg-white shadow-lg rounded-lg overflow-hidden">
        <img src="/images/accessories.jpg" alt="Accessories" className="w-full h-40 object-cover"/>
        <div className="p-4">
          <h2 className="text-xl font-bold">Accessories</h2>
          <p className="mt-2 text-gray-600">Complete your look with our stylish accessories.</p>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
