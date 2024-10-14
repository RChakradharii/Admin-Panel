import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css'; // Add your login CSS here

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  // Handle login form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple login validation (you can replace this with an actual API call)
    if (email === 'admin@admin.com' && password === 'admin123') {
      onLogin(); // Call the onLogin function from props to update login status
      navigate('/admin'); // Redirect to the admin page
    } else {
      setErrorMessage('Invalid email or password');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Admin Login</h2>
        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
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
    </div>
  );
};

export default Login;
