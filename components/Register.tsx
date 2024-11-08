import React, { useState } from 'react';

const Register: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate Firebase registration
    console.log('Registering with:', email, password);
    // In a real application, you would use Firebase's createUserWithEmailAndPassword function here.
  };

  return (
    <form onSubmit={handleRegister}>
      <h2>Register</h2>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
