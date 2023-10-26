// FarmingProducts.js
import React from 'react';
import weather from './assets/weather.jpg'

const products = [
  {
    id: 1,
    name: 'Certified Seeds',
    description: 'High genetic purity, High germinability, and Higher field establishment.',
  },
  {
    id: 2,
    name: 'Fertilizers',
    imageUrl:'src/assets/weather.jpg',
    description: 'Fertilisers containing essential nutrients required by the plants, including nitrogen, potassium, and phosphorus.',
  },
  {
    id: 3,
    name: 'Weather Forecasting',
    description: 'Accurate forecasts for smart farming.',
  },
  {
    id: 1,
    name: 'Certified Seeds',
    description: 'High genetic purity, High germinability, and Higher field establishment.',
  },
  {
    id: 2,
    name: 'Fertilizers',
    imageUrl:'src/assets/weather.jpg',
    description: 'Fertilisers containing essential nutrients required by the plants, including nitrogen, potassium, and phosphorus.',
  },
  {
    id: 3,
    name: 'Weather Forecasting',
    description: 'Accurate forecasts for smart farming.',
  },
];

const FarmingProducts = () => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-semibold mb-4">Our Products and Services</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <li key={product.id} className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-48 object-cover object-center mb-4 rounded-md"
            />
            <p className="text-gray-600">{product.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FarmingProducts;
