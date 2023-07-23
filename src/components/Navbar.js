// // client/src/components/Navbar.js
// import React from 'react';
// import { Link } from 'react-router-dom';
// import LoggedInNavbar from './LoggedInNavbar';
// import './Navbar.css';

// const Navbar = ({ isAuthenticated, handleLogout }) => {
//   return (
//     <nav>
//       <ul>
//         <li>
//           <Link to="/">Feed</Link>
//         </li>
//         {!isAuthenticated && (
//           <li>
//             <Link to="/login">Login</Link>
//           </li>
//         )}
//       </ul>

//       {isAuthenticated && <LoggedInNavbar handleLogout={handleLogout} />}
//     </nav>
//   );
// };

// export default Navbar;




// client/src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ isAuthenticated, handleLogout }) => {
  return (
    <nav>
      <ul>
          <li>
          <Link to="/">Feed</Link>
        </li>

        <li>
            <Link to="/login">Login</Link>
          </li>
        {/* {isAuthenticated && ( */}

          <>
            <li>
              <Link to="/my-posts">My Posts</Link>
            </li>
            
            {/* <li>
              <Link to="/paywall">PaymentWall</Link>
            </li> */}
            <li>
              <Link to="/following">Following</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              {/* <button onClick={handleLogout}>Logout</button> */}
              <Link to="/" >
                <span className="logoutText">Logout</span>
               </Link>
            </li>
          </>
         {/* )}
         {!isAuthenticated && ( */}
          {/* <li>
            <Link to="/login">Login</Link>
          </li> */}
        {/* )} */}
      </ul>
    </nav>
  );
};

export default Navbar;
