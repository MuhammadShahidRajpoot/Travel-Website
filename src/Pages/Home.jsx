import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <header className="header">
        <div className="header-content">
          <h1 className="lg-heading text-light main-heading">
            TRAVEL THE WORLD
          </h1>
          <p className="text-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel sit
            nulla, quos dolore ipsam laborum.
          </p>
          <Link to="/home" className="btn btn-primary text-red md-heading">
            EXPLORE
          </Link>
        </div>
      </header>
    </>
  );
};

export default Home;
