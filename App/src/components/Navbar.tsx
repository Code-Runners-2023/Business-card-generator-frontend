import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import '../styles/Main.css';
import jwt, { JwtPayload } from 'jsonwebtoken';
import jwt_decode from 'jwt-decode';

function checkJWT(): boolean {
  console.log(sessionStorage.getItem('itemToken'))
    if(!sessionStorage.getItem('itemToken')) return false;

    const token = sessionStorage.getItem('itemToken');

    if (token) {
        try {
          const decodedToken: any = jwt_decode(token);

          const currentTimestamp = Math.floor(Date.now() / 1000);
          if (decodedToken.exp && decodedToken.exp >= currentTimestamp) {
              return true;
          } else {
              console.error('JWT Expired');
          }
        } catch (error) {
            console.error('Error decoding JWT:', error);
        }
    }

    return false;
}

export const Navbar = () => {
  const checkState = checkJWT();

  return (
    <nav>
      <div className="navbar-left">
        <Link to="/">Home</Link>
      </div>
      <div className="navbar-right">
        <div className="dropdown">
          <button className="dropbtn">Menu &#9662;</button>
          <div className="dropdown-content">
            {!checkState && (
              <React.Fragment>
                <Link to="/login">Log In</Link>
                <Link to="/signup">Sign Up</Link>
              </React.Fragment>
            )}
            {checkState && (
              <React.Fragment>
                <Link to="/generate">Generate a card</Link>
                <Link to="/settings">Settings</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/preview">Card Preview</Link>
              </React.Fragment>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
