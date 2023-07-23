// client/src/components/MyPosts.js
import React, { useState, useEffect } from 'react';
import api from '../api';
// import LoggedInNavbar from './LoggedInNavbar';
// import { BrowserRouter as Router } from 'react-router-dom';
// import LoggedInNavbar from './LoggedInNavbar';
// import { Link } from 'react-router-dom';

const MyPosts = () => {
  const [myPosts, setMyPosts] = useState([]);

  useEffect(() => {
    // Fetch the authenticated user's posts from the JSON placeholder API
    api.get(`/posts?userId=1`) // Assuming the authenticated user has an ID of 1 (replace with the actual user ID)
      .then((response) => {
        setMyPosts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching my posts:', error);
      });
  }, []);

  return (
    <div>
      <h2>My Posts</h2>
      {myPosts.length > 0 ? (
        <div>
          {myPosts.map((post) => (
            <div key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No posts to display.</p>
      )}
    </div>
  );
};

export default MyPosts;
