import React from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";

const Account = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
      console.log("You are logged out");
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <div className="">
      <h1>Account page</h1>
      <p>User Email : {user && user.email}</p>

      <button onClick={handleLogout}>Logout!</button>

      <button>Content page</button>
    </div>
  );
};

export default Account;
