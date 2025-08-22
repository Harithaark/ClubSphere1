import React, { useState, useContext } from 'react';
import API from '../services/api';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await API.post('/auth/login', { email, password });
    login(res.data.user, res.data.token);
    navigate('/');
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
