import { useRouter } from 'next/router';
import '../styles/globals.css';
import { AppProps } from 'next/app';
import ProductDetail from './ProductDetail';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      <NavBar />
      {router.pathname === '/product/[id]' ? (
        <ProductDetail />
      ) : (
        <Component {...pageProps} />
      )}
      <Footer />
    </>
  );
}

export default MyApp;
