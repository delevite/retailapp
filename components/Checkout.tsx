import React, { useState } from 'react';

const Checkout: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would handle form submission and payment processing
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Checkout</h2>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>
      {/* Add other form fields here */}
      <button type="submit">Checkout</button>
    </form>
  );
};

export default Checkout;
