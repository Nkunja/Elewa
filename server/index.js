// server/index.js
const express = require('express');
const cors = require('cors');
// const bodyParser = require('body-parser');

// import express from 'express';
// import cors from 'cors';
// import { json } from 'body-parser';
// import { sign, verify } from 'jsonwebtoken'; // Library for generating JWT tokens

const app = express();
const PORT = process.env.PORT || 5000;

// Sample data for users (replace this with a database in a production environment)
import { find } from './data/users.json';
import { find } from './data/posts.json';

// Secret key for JWT token generation (replace this with a secure secret in production)
const JWT_SECRET_KEY = 'eyJhbGciOiJIUzI1NiJ9yJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY4OTk1MjM0NywiaWF0IjoxNjg5OTUyMzQ3fQ.DIC1Ue3KFbDdqWj-4Lxz861GV_dDpPjlalJAkClYEUI';

app.use(cors());
app.use(json());

// API endpoint for user login and authentication
app.post('/login', (req, res) => {
  const { email, zipCode } = req.body;

  // Find the user based on the provided email and zip code
  const user = find((user) => user.email === email && user.zipCode === zipCode);

  if (!user) {
    return res.status(401).json({ message: 'Authentication failed. Invalid credentials.' });
  }

  // Generate a JWT token
  const token = sign({ userId: user.id }, JWT_SECRET_KEY, { expiresIn: '1h' });

  // Return the token and user information (you may choose to omit sensitive information here)
  res.json({ token, user: { id: user.id, name: user.name, email: user.email } });
});

// API endpoint to check if a token is valid and get the authenticated user's information
app.post('/me', (req, res) => {
  const { token } = req.body;

  try {
    // Verify the token and extract the userId
    const decodedToken = verify(token, JWT_SECRET_KEY);

    // Find the user based on the userId from the token
    const user = find((user) => user.id === decodedToken.userId);

    if (!user) {
      return res.status(401).json({ message: 'Invalid token. User not found.' });
    }

    // Return the user information (you may choose to omit sensitive information here)
    res.json({ user: { id: user.id, name: user.name, email: user.email } });
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token.' });
  }
});

// Rest of your existing API endpoints...

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});








// //main
// // server/index.js
// import express from 'express';
// import cors from 'cors';
// import { json } from 'body-parser';

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Sample data for users (replace this with a database in a production environment)
// import users, { find, findIndex } from './data/users.json';

// app.use(cors());
// app.use(json());

// API endpoint to get the authenticated user's profile
// app.get('/users/:userId', (req, res) => {
//   const { userId } = req.params;
//   const user = find((user) => user.id === parseInt(userId));
//   if (user) {
//     res.json(user);
//   } else {
//     res.status(404).json({ message: 'User not found' });
//   }
// });

// // // Authentication endpoint
// // app.post('/login', (req, res) => {
// //   const { username, zipCode } = req.body;
// //   const user = users.find((u) => u.username === username && u.zipCode === zipCode);
// //   if (!user) {
// //     return res.status(401).json({ message: 'Invalid credentials' });
// //   }

// //   // Create a JWT token (replace 'your_secret_key' with a strong secret key)
// //   const token = sign({ userId: user.id }, 'your_secret_key', { expiresIn: '1h' });

// //   res.json({ token });
// // });


// // API endpoint to update the authenticated user's profile
// app.put('/users/:userId', (req, res) => {
//   const { userId } = req.params;
//   const { name, email, zipCode } = req.body;

//   const userIndex = findIndex((user) => user.id === parseInt(userId));
//   if (userIndex !== -1) {
//     users[userIndex] = { ...users[userIndex], name, email, zipCode };
//     res.json({ message: 'Profile updated successfully' });
//   } else {
//     res.status(404).json({ message: 'User not found' });
//   }
// });

// // API endpoint for liking a post
// app.post('/posts/:postId/like', (req, res) => {
//   const { postId } = req.params;
//   // Add logic to handle post liking and update the number of likes
//   // Return the updated post object with the number of likes
//   // For example:
//   // const updatedPost = { ...yourLogicToUpdateLikes };
//   // res.json(updatedPost);
//   res.status(501).json({ message: 'Not implemented' });
// });

// // API endpoint for unliking a post
// app.post('/posts/:postId/unlike', (req, res) => {
//   const { postId } = req.params;
//   // Add logic to handle post unliking and update the number of likes
//   // Return the updated post object with the number of likes
//   // For example:
//   const updatedPost = { ...yourLogicToUpdateLikes };
//   res.json(updatedPost);
//   res.status(501).json({ message: 'Not implemented' });
// });

// // API endpoint for searching posts
// app.get('/search', (req, res) => {
//   const { q } = req.query;
//   // Add logic to perform search based on the query 'q'
//   // Return the array of posts matching the search query
//   // For example:
//   const searchResults = [...yourSearchLogic];
//   res.json(searchResults);
//   res.status(501).json({ message: 'Not implemented' });
// });

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });












// server/index.js
// import express, { json } from 'express';
// import { create } from 'axios';

// const express = require('express');
// const axios = require('axios');


// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware to parse JSON data

// // app.use(json());
// let users = require('./data/users.json');

// // Mock JSON placeholder API base URL
// const jsonPlaceholderApi = create({
//   baseURL: 'https://jsonplaceholder.typicode.com',
// });

// const fetchPosts = () => jsonPlaceholderApi.get('/posts?_limit=20');
// // Authentication endpoint
// app.post('/login', (req, res) => {
//   const { username, zipCode } = req.body;
//   const user = users.find((u) => u.username === username && u.zipCode === zipCode);
//   if (!user) {
//     return res.status(401).json({ message: 'Invalid credentials' });
//   }

//   // Create a JWT token (replace 'your_secret_key' with a strong secret key)
//   const token = sign({ userId: user.id }, 'your_secret_key', { expiresIn: '1h' });

//   res.json({ token });
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

//im coming for you

// // server/index.js
// import express from 'express';
// import { sign, verify } from 'jsonwebtoken';

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Simulated users (replace this with actual user data from your database)
// const users = [
//   { id: 1, username: 'Bret', email: 'bret@example.com', zipCode: '92988-3874' },
//   // Add more users as needed
// ];

// // Authentication endpoint
// app.post('/login', (req, res) => {
//   const { username, zipCode } = req.body;
//   const user = users.find((u) => u.username === username && u.zipCode === zipCode);
//   if (!user) {
//     return res.status(401).json({ message: 'Invalid credentials' });
//   }

//   // Create a JWT token (replace 'your_secret_key' with a strong secret key)
//   const token = sign({ userId: user.id }, 'your_secret_key', { expiresIn: '1h' });

//   res.json({ token });
// });

// // Add other API endpoints for fetching posts, following users, blocking posts, etc.

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

// // server/index.js
// // ... (previous code)

// // Middleware function to check authentication token
// const authenticateUser = (req, res, next) => {
//     const token = req.header('Authorization');
  
//     if (!token) {
//       return res.status(401).json({ message: 'Authorization token missing' });
//     }
  
//     // Verify the token (replace 'your_secret_key' with the same secret key used during token creation)
//     verify(token, 'your_secret_key', (err, decoded) => {
//       if (err) {
//         return res.status(401).json({ message: 'Invalid token' });
//       }
//       req.userId = decoded.userId; // Store the authenticated user's ID in the request for further use
//       next();
//     });
//   };
  
//   // Protected endpoint to fetch authenticated user's posts
//   app.get('/my-posts', authenticateUser, (req, res) => {
//     const userId = req.userId; // Access the authenticated user's ID from the request
//     // Use the JSON placeholder API to fetch posts for the authenticated user
//     // ... (fetch data and return response)
//   });
  
  // Add other protected API endpoints as needed
  
  // ... (continue with other code)
  



  //sijui
  // server/index.js
// const express = require('express');
// const cors = require('cors');
// const bodyParser = require('body-parser');

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Sample data for posts and likes (replace this with a database in a production environment)
// let posts = require('./data/posts.json');
// let likes = {};

// app.use(cors());
// app.use(bodyParser.json());

// // API endpoint to get all posts
// app.get('/posts', (req, res) => {
//   res.json(posts);
// });

// // API endpoint to like a post
// app.post('/posts/:postId/like', (req, res) => {
//   const { postId } = req.params;
//   if (!likes[postId]) {
//     likes[postId] = 0;
//   }
//   likes[postId]++;
//   res.json({ likes: likes[postId] });
// });

// // API endpoint to unlike a post
// app.post('/posts/:postId/unlike', (req, res) => {
//   const { postId } = req.params;
//   if (!likes[postId]) {
//     likes[postId] = 0;
//   }
//   if (likes[postId] > 0) {
//     likes[postId]--;
//   }
//   res.json({ likes: likes[postId] });
// });

// // API endpoint to search posts
// app.get('/search', (req, res) => {
//   const { q } = req.query;
//   const searchTerm = q.toLowerCase().trim();

//   if (!searchTerm) {
//     res.json(posts);
//   } else {
//     const results = posts.filter(
//       (post) =>
//         post.title.toLowerCase().includes(searchTerm) ||
//         post.body.toLowerCase().includes(searchTerm)
//     );
//     res.json(results);
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });



