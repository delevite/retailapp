import NavBar from '../components/NavBar';
import ProductList from './ProductList';
import { Product } from '../types/Product';
import HeroSection from '../components/HeroSection';
import Categories from '../components/Categories';
import FeaturedProducts from '../components/FeaturedProducts';
import Testimonials from '../components/Testimonials';
import BlogSection from '../components/BlogSection';
import Footer from '../components/Footer';


const featuredProducts: Product[] = [
  { id: 1, title: "Featured Product 1", name: "Featured Product 1", description: "Description 1", price: 19.99, image: "/product1.jpg" },
  { id: 2, title: "Featured Product 2", name: "Featured Product 2", description: "Description 2", price: 29.99, image: "/product2.jpg" },
];

const newArrivals: Product[] = [
  { id: 3, title: "New Arrival 1", name: "New Arrival 1", description: "Description 3", price: 39.99, image: "/product3.jpg" },
  { id: 4, title: "New Arrival 2", name: "New Arrival 2", description: "Description 4", price: 49.99, image: "/product4.jpg" },
];

const Home = () => {
  return (
    <div>
      <header>
        <NavBar isAuthenticated={false} handleLogout={() => {}} />
      </header>
      <main>
        <HeroSection />
        <Categories />
        <FeaturedProducts products={featuredProducts} />
        <Testimonials />
        <BlogSection />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
