import ProductList from "./ProductList";
import { Product } from '../types/Product';

const featuredProducts: Product[] = [
  { id: 1, name: "Featured Product 1", description: "Description 1", price: 19.99, image: "/product1.jpg" },
  { id: 2, name: "Featured Product 2", description: "Description 2", price: 29.99, image: "/product2.jpg" },
];

const newArrivals: Product[] = [
  { id: 3, name: "New Arrival 1", description: "Description 3", price: 39.99, image: "/product3.jpg" },
  { id: 4, name: "New Arrival 2", description: "Description 4", price: 49.99, image: "/product4.jpg" },
];

export default function Home() {
  return (
    <div className="container mx-auto">
      {/* Hero Banner */}
      <div className="bg-blue-500 p-10 text-white text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Store!</h1>
        <p className="text-lg mb-8">Find the perfect products for you.</p>
        <button className="bg-white text-blue-500 px-6 py-3 rounded-full hover:bg-blue-100">Shop Now</button>
      </div>

      {/* Product Categories */}
      <div className="grid grid-cols-3 gap-4 mt-8">
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2>Category 1</h2>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2>Category 2</h2>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2>Category 3</h2>
        </div>
      </div>

      {/* Featured Products */}
      <h2 className="text-2xl font-bold mt-12">Featured Products</h2>
      <ProductList products={featuredProducts} />

      {/* New Arrivals */}
      <h2 className="text-2xl font-bold mt-12">New Arrivals</h2>
      <ProductList products={newArrivals} />

      {/* Customer Testimonials */}
      <h2 className="text-2xl font-bold mt-12">Customer Testimonials</h2>
      <div className="mt-4">
        <p>"Great products and excellent service!" - John Doe</p>
        <p>"I love shopping here!" - Jane Doe</p>
      </div>

      {/* Newsletter Signup */}
      <h2 className="text-2xl font-bold mt-12">Newsletter Signup</h2>
      <div className="mt-4">
        <input type="email" placeholder="Enter your email" className="border border-gray-300 px-4 py-2 rounded-md" />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md ml-4">Subscribe</button>
      </div>
    </div>
  );
}
