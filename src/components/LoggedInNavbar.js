// client/src/components/LoggedInNavbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const LoggedInNavbar = ({ handleLogout }) => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/my-posts">My Posts</Link>
        </li>
        <li>
          <Link to="/following">Following</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <button onClick={handleLogout}>Logout</button>
        </li>
      </ul>
    </nav>
  );
};

export default LoggedInNavbar;
