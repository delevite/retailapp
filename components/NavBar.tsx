import React from 'react';
import Link from 'next/link';
import {ShoppingCartIcon} from '@heroicons/react/24/outline'

interface NavBarProps {
  isAuthenticated: boolean;
  handleLogout: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ isAuthenticated, handleLogout }) => {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img src="/logo.svg" alt="Logo" className="h-8 w-auto"/> {/* Placeholder logo */}
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/skincare">
                  <span className="text-white hover:text-gray-300">Skincare</span>
                </Link>
                <Link href="/fitness">
                  <span className="text-white hover:text-gray-300">Fitness</span>
                </Link>
                <Link href="/accessories">
                  <span className="text-white hover:text-gray-300">Accessories</span>
                </Link>
                <Link href="/about">
                  <span className="text-white hover:text-gray-300">About Us</span>
                </Link>
                <Link href="/contact">
                  <span className="text-white hover:text-gray-300">Contact Us</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <input type="text" placeholder="Search" className="bg-gray-700 text-white px-3 py-2 rounded"/>
              {isAuthenticated ? (
                <>
                  <button onClick={handleLogout} className="text-white hover:text-gray-300">Logout</button>
                  <Link href="/cart">
                    <span className="text-white hover:text-gray-300 flex items-center">
                      <ShoppingCartIcon className="h-6 w-6"/>
                      Cart
                    </span>
                  </Link>
                </>
              ) : (
                <>
                  <Link href="/login">
                    <span className="text-white hover:text-gray-300">Login</span>
                  </Link>
                  <Link href="/register">
                    <span className="text-white hover:text-gray-300">Register</span>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
