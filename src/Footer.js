// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white p-4">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <p>&copy; 2023 LimaPlan Website</p>
          <p>Contact us: contact@limaplan.com</p>
          <div className="mt-4">
            <a href="https://web.facebook.com/login/?_rdc=1&_rdr" className="text-white hover:text-gray-400 mx-2">
              Facebook
            </a>
            <a href="#" className="text-white hover:text-gray-400 mx-2">
              Twitter
            </a>
            <a href="#" className="text-white hover:text-gray-400 mx-2">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
