import React, { useState } from 'react';

interface LoginProps {
  handleLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate Firebase authentication
    console.log('Logging in with:', email, password);
    handleLogin(); // Call the prop to update authentication state
    // In a real application, you would use Firebase's signInWithEmailAndPassword function here.
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
