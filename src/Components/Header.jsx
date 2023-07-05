import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="navbar ">
        <div className="container text-light">
          <h1 className="logo lg-heading text-light">WT</h1>
          <ul className="nav-items">
            <li className="nav-item">
              <Link to="/">HOME</Link>
            </li>
            <li className="nav-item">
              <Link to="/about">ABOUT</Link>
            </li>
            <li className="nav-item">
              <Link to="/places">EXPLORE</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact">CONTACT</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
