// NewsletterSubscription.js
import React, { useState } from 'react';

const NewsletterSubscription = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can implement your subscription logic here (e.g., API call).

    // For this example, we'll simply set the state to simulate a successful subscription.
    setSubscribed(true);
  };

  return (
    <div className="container mx-auto py-4">
      <h2 className="text-2xl font-semibold mb-4">Subscribe to Our Newsletter</h2>
      {subscribed ? (
        <p className="text-green-500">Thank you for subscribing!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="flex">
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={handleEmailChange}
              className="w-full p-2 rounded-l border"
              required
            />
            <button type="submit" className="bg-green-500 text-white p-2 rounded-r">Subscribe</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default NewsletterSubscription;
