import React from 'react';
import Link from 'next/link';

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
              {/* Logo here */}
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/">
                  <a className="text-white hover:text-gray-300">Home</a>
                </Link>
                <Link href="/products">
                  <a className="text-white hover:text-gray-300">Products</a>
                </Link>
                {isAuthenticated && (
                  <button onClick={handleLogout} className="text-white hover:text-gray-300">Logout</button>
                )}
              </div>
            </div>
          </div>
          {/* Right side of navbar here */}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
