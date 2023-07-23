// client/src/components/Following.js
import React, { useState, useEffect } from 'react';
import api from '../api';

const Following = () => {
  const [followingPosts, setFollowingPosts] = useState([]);
  const [followingUsers, setFollowingUsers] = useState([]);

  useEffect(() => {
    // Fetch a list of users that the authenticated user is following
    api.get('/users/following') // Replace this endpoint with the appropriate backend API endpoint
      .then((response) => {
        setFollowingUsers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching following users:', error);
      });
  }, []);

  useEffect(() => {
    // Fetch posts from the users that the authenticated user is following
    if (followingUsers.length > 0) {
      const userIds = followingUsers.map((user) => user.id).join(',');
      api.get(`/posts?userId=${userIds}`)
        .then((response) => {
          setFollowingPosts(response.data);
        })
        .catch((error) => {
          console.error('Error fetching following posts:', error);
        });
    }
  }, [followingUsers]);

  return (
    <div>
      <h2>Following</h2>
      {followingPosts.length > 0 ? (
        <div>
          {followingPosts.map((post) => (
            <div key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
              <p>Posted by: User {post.userId}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No posts from the users you are following.</p>
      )}
    </div>
    
  );
};

export default Following;
