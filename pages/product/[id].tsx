import { useRouter } from 'next/router';
import { Product } from '../../types/Product';

interface ProductDetailProps {
  product: Product | null;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  const router = useRouter();
  const { id } = router.query;

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <img src={product.image} alt={product.name} className="w-full h-64 object-cover mb-4" />
      <p className="text-lg mb-4">{product.description}</p>
      <p className="text-2xl font-bold mb-4">&#36;{product.price.toFixed(2)}</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add to Cart</button>
    </div>
  );
};

export async function getServerSideProps(context: any) {
  const { id } = context.params;
  const product = await getProductById(parseInt(id)); // Replace with your actual data fetching logic

  return {
    props: { product },
  };
}

const getProductById = async (id: number): Promise<Product | null> => {
  // Replace with your actual data fetching logic.  For now, return a sample product.
  const products = [
    { id: 1, name: "Product 1", description: "Description 1", price: 19.99, image: "/product1.jpg" },
    { id: 2, name: "Product 2", description: "Description 2", price: 29.99, image: "/product2.jpg" },
    { id: 3, name: "Product 3", description: "Description 3", price: 39.99, image: "/product3.jpg" },
    { id: 4, name: "Product 4", description: "Description 4", price: 49.99, image: "/product4.jpg" },
  ];
  return products.find((p) => p.id === id) || null;
};


export default ProductDetail;
