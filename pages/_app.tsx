import { useRouter } from 'next/router';
import '../styles/globals.css';
import { AppProps } from 'next/app';
import ProductDetail from './ProductDetail';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { useState } from 'react';
import Login from '../components/Login';
import Register from '../components/Register';


function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Simulate authentication state

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };


  return (
    <>
      <NavBar isAuthenticated={isAuthenticated} handleLogout={handleLogout} />
      {isAuthenticated ? (
        <>
          {router.pathname === '/product/[id]' ? (
            <ProductDetail />
          ) : (
            <Component {...pageProps} />
          )}
          <Footer />
        </>
      ) : (
        <>
          <Login handleLogin={handleLogin} />
          <Register />
        </>
      )}
    </>
  );
}

export default MyApp;
