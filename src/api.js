// client/src/api.js
import axios from 'axios';
// import React, { useState, useEffect } from 'react';

//  const BASE_URL = 'http://localhost:5000'; // Replace with your backend server URL
const BASE_URL = 'https://jsonplaceholder.typicode.com';
const ANTH_URL = 'http://localhost:5000';

const api = axios.create({
  baseURL: BASE_URL,
  serverURL: ANTH_URL
});

// Fetch all posts
//api.get('/posts');
 export const fetchPosts = () => api.get('/posts');

    //   useEffect(() => {
    //     // Fetch up to 20 posts from the JSON placeholder API for anonymous or free users
    //     api.get('/posts?_limit=20')
    //       .then((response) => {
    //         setPosts(response.data);
    //       })
    //       .catch((error) => {
    //         console.error('Error fetching posts:', error);
    //       });
    //   }, []);

// Like a post
export const likePost = (postId) => api.post(`/posts/${postId}/like`);

// Unlike a post
export const unlikePost = (postId) => api.post(`/posts/${postId}/unlike`);

// Search posts based on a query
export const searchPosts = (query) => api.get('/search', { params: { q: query } });

// Fetch user profile
export const fetchUserProfile = (userId) => api.get(`/users/${userId}`);

// Update user profile
export const updateUserProfile = (userId, updatedProfile) => api.put(`/users/${userId}`, updatedProfile);

export default api;
