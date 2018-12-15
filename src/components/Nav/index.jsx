import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

const Nav = ({ auth }) => {
  const { isAuthenticated } = auth;
  const login = () => {
    auth.login();
  };
  const logout = () => {
    auth.logout();
  };
  return (
    <div className="header-nav">
      <span to="/" className="title">
        <Link to="/">
          <span role="img" aria-label="home-icon">
            😆
          </span>
        </Link>
        Go Fun The English
      </span>
      <div>
        {isAuthenticated() ? (
          <React.Fragment>
            <Link to="/my-words">My Words</Link>
          </React.Fragment>
        ) : (
          <a onClick={login}>Log In</a>
        )}
        {isAuthenticated() && <a onClick={logout}>Log Out</a>}
      </div>
    </div>
  );
};

export default Nav;
