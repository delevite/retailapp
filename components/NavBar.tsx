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
                  <span className="text-white hover:text-gray-300">Home</span>
                </Link>
                <Link href="/products">
                  <span className="text-white hover:text-gray-300">Products</span>
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
