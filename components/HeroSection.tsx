import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="hero bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white">
      <img src="/hero-image.jpg" alt="Promo Image" className="w-full h-64 object-cover"/>
      <div className="text-center p-8">
        <h1 className="text-4xl font-bold">Discover Excellence in Every Product</h1>
        <p className="mt-4 text-lg">Experience the best in skincare, fitness, and accessories designed to enhance your lifestyle.</p>
        <button className="mt-4 bg-white text-purple-600 px-4 py-2 rounded-lg hover:bg-purple-600 hover:text-white transition duration-300">Shop Now</button>
      </div>
    </section>
  );
};

export default HeroSection;
