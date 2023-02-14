import React, { useState } from "react";
import "./index.css";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import backimg from "./../../asstez/backimg.jpg";
import logo from "./../../asstez/react.png";
import { motion } from "framer-motion";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { signIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signIn(email, password, error);
      navigate("/account");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };
  return (
    <div className="login-page">
      <div className="img-container1">
        <img src={backimg} className="backimg" alt="img" />
        <div className="logo">
          <img src={logo} alt="lo" className="logo1" />
        </div>
        <div className="both-part">
          <div className="header-part">
            <h1>Sign in to your Account</h1>
            <p>
              Don't have an account ? <Link to="/signup">Sign Up!</Link>
            </p>
          </div>

          <div className="form-part">
            <form onSubmit={handleSubmit}>
              <div className="form-group1">
                <label className="form-lable1">Email Address</label>
                <input
                  className="form-input1"
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                />
              </div>
              <div className="form-group1">
                <label className="form-lable1">Password</label>
                <input
                  className="form-input1"
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                />
              </div>
              <motion.div
                className="add-btn"
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}>
                <button className="addButton">
                  <div className="add-txt">Sign In !</div>
                </button>
              </motion.div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
