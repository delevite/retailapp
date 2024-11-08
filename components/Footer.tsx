import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer bg-purple-600 text-white p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div>
          <h3 className="text-lg font-bold">About Us</h3>
          <p className="mt-2 text-gray-300">Learn more about our mission and values.</p>
        </div>
        <div>
          <h3 className="text-lg font-bold">Quick Links</h3>
          <ul className="mt-2">
            <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:underline">Terms of Service</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold">Follow Us</h3>
          <div className="mt-2">
            {/* Social media icons would go here */}
          </div>
        </div>
      </div>
      <div className="mt-6 text-center">
        <p>&copy; 2024 Your Brand. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
