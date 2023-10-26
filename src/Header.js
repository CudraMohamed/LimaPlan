// Header.js
import logo from './assets/limalogo.png';
import React from 'react';

const Header = () => {
  return (
    <header className="bg-green-500 p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div>
          <img src={logo} alt="" class="w=24 h-24"/>

          </div>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="text-white hover:text-yellow-300">Home</a></li>
              <li><a href="#" className="text-white hover:text-yellow-300">Products</a></li>
              <li><a href="#" className="text-white hover:text-yellow-300">Services</a></li>
              <li><a href="#" className="text-white hover:text-yellow-300">About Us</a></li>
              <li><a href="#" className="text-yellow-300 hover:text-grey-300 underline">Sign In</a></li>
            </ul>
          </nav>
          
        </div>
      </div>
    </header>
  );
};

export default Header;
