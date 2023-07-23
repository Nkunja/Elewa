// client/src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Feed from './components/Feed';
import Login from './components/Login';
import MyPosts from './components/MyPosts';
import Following from './components/Following';
import UserProfile from './components/UserProfile';
import Navbar from './components/Navbar';
import PaymentPage from './components/PaymentPage';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [remainingPosts ] = useState(false);

  const handleLogin = (user) => {
    // Handle successful login (e.g., store authentication token, update state)
    setIsAuthenticated(true);
  };

  const handleLoadMore = () => {
    // Handle successful login (e.g., store authentication token, update state)
    remainingPosts(true);
  };

  const handleLogout = () => {
    // Handle logout (e.g., clear authentication token, update state)
    setIsAuthenticated(false);
  };

  return (
    // <Router>
    //   <div>
    //   <Navbar isAuthenticated={isAuthenticated} handleLogout={handleLogout} />
    //     <Routes>
    //       <Route exact path="/" component={Feed} />
    //       <Route path="/login">
    //         <Login handleLogin={handleLogin} />
    //       </Route>
    //       {isAuthenticated && (
    //         <>
    //           <Route path="/my-posts" component={MyPosts} />
    //           <Route path="/following" component={Following} />
    //           <Route path="/profile" component={UserProfile} />
    //         </>
    //       )}
    //     </Routes>
    //   </div>
    // </Router>

    <Router>
      <div>
        <Navbar isAuthenticated={isAuthenticated} handleLogout={handleLogout} />
        
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/login" element={<Login handleLogin={handleLogin} />} />
          <Route path="paywall" element={<PaymentPage handleLoadMore={handleLoadMore}  />} />
          
          {/* {isAuthenticated &&  */}
          (
            <>
              <Route path="/my-posts" element={<MyPosts />} />
              <Route path="/following" element={<Following />} />
              <Route path="/profile" element={<UserProfile />} />
              {/* <Route path="paywall" component={<PaymentPage />} /> */}
            </>
          )
          {/* } */}
        </Routes>

        < Footer />
      </div>
    </Router>
  );
};

export default App;
