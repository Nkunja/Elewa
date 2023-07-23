// client/src/components/Login.js
import React, { useState, useEffect } from 'react';
import api from '../api';
import { Link } from "react-router-dom";
import './Login.css';

const Login = ({ handleLoginFormSubmit }) => {
  const [username, setUsername] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  

  handleLoginFormSubmit = (e) => {
    e.preventDefault();
    // Perform API call to validate user credentials (Simulation using hardcoded data)

    if (username.trim() === '' || zipCode.trim() === '') {
      console.error('Please fill in both fields.');
      return;

    }

    api.get('/users')
      .then((response) => {
        const users = response.data;
        const user = users.find((u) => u.username === username && u.address.zipcode === zipCode);
        if (user) {
          // handleLogin(user); // Pass the authenticated user to the parent component
        } else {
          console.error('Invalid credentials');
          // Handle login failure (e.g., show error message)
        }
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  };

// const Login = ({ handleLogin }) => {
//   const [username, setUsername] = useState('');
//   const [zipCode, setZipCode] = useState('');
//   const [isFormValid, setIsFormValid] = useState(false);

  // Check if both username and zipCode have values, and update isFormValid accordingly
  useEffect(() => {
    setIsFormValid(username.trim() !== '' && zipCode.trim() !== '');
  }, [username, zipCode]);

  // isFormValid(history.push('/login'));

//   const handleLoginFormSubmit = (e) => {
//     e.preventDefault();
//     // Perform API call to validate user credentials (Simulation using hardcoded data)
//     api
//       .get('/users')
//       .then((response) => {
//         const users = response.data;
//         const user = users.find((u) => u.username === username && u.address.zipcode === zipCode);
//         if (user) {
//           handleLogin(user); // Pass the authenticated user to the parent component
//         } else {
//           console.error('Invalid credentials');
//           // Handle login failure (e.g., show error message)
//         }
//       })
//       .catch((error) => {
//         console.error('Error fetching users:', error);
//       });
//   };


  return (
    <div>
      <form onSubmit={handleLoginFormSubmit}>
        <input
          type="text"
          placeholder="Username or Email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Zip Code"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
          maxLength="16"
          // placeholder="Enter card number"
          required
        />
        <p style={{ color: "red" }}>Please fill in the required fields.</p>
        <div style={{ display: "flex", alignItems: "center" }}> 
        <Link to="/my-posts" className="loginBtn">
        <button type="submit" disabled={!isFormValid} >Login</button>
        </Link>
        <Link to="/" className="loginBtn" >
        <button type="submit">Back</button>
        </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
