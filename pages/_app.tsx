import { useRouter } from 'next/router';
import '../styles/globals.css';
import { AppProps } from 'next/app';
import ProductDetail from './ProductDetail';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      {router.pathname === '/product/[id]' ? (
        <ProductDetail />
      ) : (
        <Component {...pageProps} />
      )}
    </>
  );
}

export default MyApp;
