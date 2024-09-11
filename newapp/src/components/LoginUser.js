import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './LoginUser.css';

function LoginUser() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userInitial, setUserInitial] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/api/loginUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message);
        const initial = email.charAt(0).toUpperCase();
        setUserInitial(initial);

        const loginTimestamp = new Date().toLocaleString();
        localStorage.setItem('loginTimestamp', loginTimestamp);

        if (data.token) {
          localStorage.setItem('authToken', data.token);
        }

        navigate('/');
      } else {
        toast.error(data.message || 'Login failed!');
      }
    } catch (error) {
      toast.error('An error occurred during login!');
    }
  };

  return (
    <div className="login-user">
      <ToastContainer />
      <h2>Login User</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <Link to="/createUser">Create one here</Link>
      </p>
      {userInitial && (
        <div className="userIcon">
          {userInitial}
        </div>
      )}
    </div>
  );
}

export default LoginUser;
