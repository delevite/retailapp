import React from 'react';

const BlogSection: React.FC = () => {
  return (
    <section className="blog-section p-6">
      <h2 className="text-2xl font-bold mb-4">Latest Blog Posts</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="blog-post bg-white shadow-lg rounded-lg overflow-hidden">
          <img src="/images/blog1.jpg" alt="Blog Post" className="w-full h-40 object-cover"/>
          <div className="p-4">
            <h3 className="text-xl font-bold">Top 10 Skincare Tips for Glowing Skin</h3>
            <p className="mt-2 text-gray-600">Discover the best tips and tricks to keep your skin radiant and healthy. Learn from our experts...</p>
            <a href="/blog-post-url1" className="mt-4 text-purple-600 hover:underline">Read more</a>
          </div>
        </div>
        <div className="blog-post bg-white shadow-lg rounded-lg overflow-hidden">
          <img src="/images/blog2.jpg" alt="Blog Post" className="w-full h-40 object-cover"/>
          <div className="p-4">
            <h3 className="text-xl font-bold">Effective Fitness Routines for Beginners</h3>
            <p className="mt-2 text-gray-600">Start your fitness journey with these easy-to-follow routines. Get fit and healthy...</p>
            <a href="/blog-post-url2" className="mt-4 text-purple-600 hover:underline">Read more</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
