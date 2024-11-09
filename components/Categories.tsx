import { useEffect, useState } from 'react';
import { Category } from '../types/Category';

interface Category {
  name: string;
  image: string;
  link: string;
}

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    fetch('/data/categories.json')
      .then(response => response.json())
      .then(data => setCategories(data));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {categories.map((category) => (
        <div key={category.name} className="category-card bg-white shadow-lg rounded-lg overflow-hidden">
          <img src={category.image} alt={category.name} className="w-full h-40 object-cover"/>
          <div className="p-4">
            <h2 className="text-xl font-bold">{category.name}</h2>
            <p className="mt-2 text-gray-600">Explore our {category.name.toLowerCase()} products.</p>
            <a href={category.link} className="mt-4 text-purple-600 hover:underline">Shop Now</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Categories;
