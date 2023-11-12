/* eslint-disable */
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import "../css/LoginPage.css";

const LoginPage = () => {
  const [username, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const baseUrl = "http://localhost:9001/api/user/login";

    try {
      const response = await axios.post(baseUrl, {
        username,
        password
      });

      console.log(response.data.loginUser.client_name)
      if (response.data.loginUser.client_name === "admin") {
        alert("User Login Successfully");

        Cookies.set("admin", username)
        navigate("/admin");
      } else {
        alert("Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("Please check your credentials or verify your account");
    }
  };

  return (
    <div class="father">
      <div class="left">
        <div class="logo">
          <img src={require("../img/admin/H-FoodbudLogo.png")} />
        </div>
        <div class="text">
          <p class="text1">Admin Log In</p>
          <p class="text2">Welcome back, please login to your account</p>
        </div>
        <form>
          <div className="mb-4" class="email">
            <label class="" htmlFor="email">
              Email
            </label>
            <input
              type="text"
              id="email"
              className="w-full border rounded-lg p-2"
              placeholder="Enter Email"
              onChange={(e) => {
                setIdentifier(e.target.value);
              }}
            />
          </div>
          <div className="mb-4" class="password">
            <label class="" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full border rounded-lg p-2"
              placeholder="Enter Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div class="forgot">
            <p>Forgot your password?</p>
          </div>
          <button
            className=" bg-blue-500 text-white font-semibold  rounded-lg hover:bg-blue-600"
            type="submit"
            onClick={handleLogin}
          >
            Login
          </button>
        </form>
        <div class="user">
          <p class="login">Not an Admin? <span><a href="">Back to User Login</a></span></p>
        </div>
      </div>
      <div class="right"></div>
    </div>
  );
};

export default LoginPage;