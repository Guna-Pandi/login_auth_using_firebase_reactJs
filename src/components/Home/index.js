import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import backimg from "./../../asstez/backimg.jpg";
import logo from "./../../asstez/react.png";

const Home = () => {
  return (
    <div className="home-page">
      <img src={backimg} className="backimg" alt="img" />
      <div className="logo">
          <img src={logo} alt="lo" className="logo1" />
        </div>
        <div className="para-tag">
          <h1>AUTHENTICATION USING <span>FIREBASE</span> </h1>
          <p> This page is designed to demonstrate a simple Firebase Authentication using React Js</p>
        </div>
        <div className="btn-two">
          <Link to="/signin">
            <button className="sign-in">Sign In</button>
          </Link>
          <Link to="/signup">
            <button className="sign-up">Sign Up</button>
          </Link>
        </div>
      </div>
  
  );
};

export default Home;
