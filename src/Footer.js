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
            <a href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D" className="text-white hover:text-gray-400 mx-2">
              Twitter
            </a>
            <a href="https://www.instagram.com/accounts/login/" className="text-white hover:text-gray-400 mx-2">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
