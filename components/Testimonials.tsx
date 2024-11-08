import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <section className="testimonials p-6 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">What Our Customers Say</h2>
      <div className="carousel">
        <div className="testimonial bg-white shadow-lg rounded-lg p-4">
          <p className="text-gray-700">"Great products and amazing service!"</p>
          <div className="mt-2 flex items-center">
            <img src="/path-to-customer-photo.jpg" alt="Customer" className="w-10 h-10 rounded-full"/>
            <span className="ml-2 text-gray-600">Jane Doe</span>
          </div>
        </div>
        <div className="testimonial bg-white shadow-lg rounded-lg p-4">
          <p className="text-gray-700">"I love their products! My skin has never felt better."</p>
          <div className="mt-2 flex items-center">
            <img src="/path-to-customer-photo2.jpg" alt="Customer" className="w-10 h-10 rounded-full"/>
            <span className="ml-2 text-gray-600">John Smith</span>
            <span className="ml-2 text-yellow-500">★★★★★</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
