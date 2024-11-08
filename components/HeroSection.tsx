import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-cover bg-center h-96" style={{backgroundImage: "url('/hero-image.jpg')"}}>
      <div className="container mx-auto flex items-center justify-center h-full">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Welcome to Our Store!</h1>
          <p className="text-2xl mb-8">Find the perfect products for you.</p>
          <button className="bg-white text-blue-500 px-6 py-3 rounded-full hover:bg-blue-100">Shop Now</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
