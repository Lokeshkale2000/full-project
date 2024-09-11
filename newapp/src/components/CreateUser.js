import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom'; // Import Link here
import './CreateUser.css';

function CreateUser() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== repassword) {
      setError('Passwords do not match');
      return;
    }

    setError(''); // Clear error message

    try {
      const response = await axios.post('http://localhost:8080/api/createUser', {
        email,
        password,
      });
      alert(response.data.msg);
      navigate('/LoginUser'); // Redirect to login page after successful user creation
    } catch (error) {
      alert('Error creating user');
    }
  };

  return (
    <div className="create-user">
      <h2>Create User</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label className='email-title'>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label className='password-title'>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label>RePassword:</label>
          <input
            type="password"
            value={repassword}
            onChange={(e) => setRepassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Create User</button>
      </form>
      <p>
        Already have an account? <Link to="/LoginUser">Login here</Link>
      </p>
    </div>
  );
}

export default CreateUser;
