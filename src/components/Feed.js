// client/src/components/Feed.js
import React, { useState, useEffect } from 'react';
import api, { likePost, unlikePost, searchPosts } from '../api';
import './Feed.css';
// import { BrowserRouter as Route } from 'react-router-dom';
// import Paywall from './Paywall';
import { Link } from 'react-router-dom';

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [remainingPosts, setRemainingPosts] = useState(20);
  const [searchQuery, setSearchQuery] = useState('');
  const [likedPosts, setLikedPosts] = useState([]);

  useEffect(() => {
    // Fetch up to 20 posts from the JSON placeholder API for anonymous or free users
    api.get('/posts?_limit=20')
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching posts:', error);
      });
  }, []);

//   useEffect(() => {
//     // Fetch posts from the backend server, which, in turn, fetches data from the JSON placeholder API
//     axios.get('http://localhost:5000/posts')
//       .then((response) => {
//         setPosts(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching posts:', error);
//       });
//   }, []);

  const handleLoadMore = () => {
    // Check if the user has reached the free limit of 20 posts
    // <Route path="/paywall" component={<Paywall />} />
  
    if (remainingPosts <= 0) {
      // Show paywall or other actions for exceeding free limit
      // < Paywall />
      this.props.history.push("/paywall");
      return;
    }

    // Fetch additional posts if available
    const offset = 20 - remainingPosts;
    api.get(`/posts?_start=${offset}&_limit=10`)
      .then((response) => {
        setPosts((prevPosts) => [...prevPosts, ...response.data]);
        setRemainingPosts((prevRemaining) => prevRemaining - response.data.length);
      })
      .catch((error) => {
        console.error('Error fetching additional posts:', error);
      });
  };

  const handleLikePost = (postId) => {
    // Call the likePost API function to like the post
    likePost(postId)
      .then((response) => {
        // Update the number of likes for the post in the local state
        const updatedPosts = posts.map((post) =>
          post.id === postId ? { ...post, likes: response.data.likes } : post
        );
        setPosts(updatedPosts);
        // Add the post ID to the list of liked posts
        setLikedPosts((prevLikedPosts) => [...prevLikedPosts, postId]);
      })
      .catch((error) => {
        console.error('Error liking the post:', error);
      });
  };

  const handleUnlikePost = (postId) => {
    // Call the unlikePost API function to unlike the post
    unlikePost(postId)
      .then((response) => {
        // Update the number of likes for the post in the local state
        const updatedPosts = posts.map((post) =>
          post.id === postId ? { ...post, likes: response.data.likes } : post
        );
        setPosts(updatedPosts);
        // Remove the post ID from the list of liked posts
        setLikedPosts((prevLikedPosts) => prevLikedPosts.filter((id) => id !== postId));
      })
      .catch((error) => {
        console.error('Error unliking the post:', error);
      });
  };

  const handleSearch = () => {
    // Call the searchPosts API function to perform the search
    searchPosts(searchQuery)
      .then((response) => {
        // Update the posts with the search results
        setPosts(response.data);
      })
      .catch((error) => {
        console.error('Error searching posts:', error);
      });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search posts..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <button
            onClick={() => (likedPosts.includes(post.id) ? handleUnlikePost(post.id) : handleLikePost(post.id))}
          >
            {likedPosts.includes(post.id) ? 'Unlike' : 'Like'} ({post.likes || 0})
          </button>
        </div>
      ))}
      {remainingPosts > 0 && (
        // <button onClick={handleLoadMore}>Load More</button>
        <Link to="/paywall" >
          {/* <span className="loginText">Load More</span> */}
          <button onClick={handleLoadMore}>Load More</button>
        </Link>
      )}
    </div>
  );
};

export default Feed;
