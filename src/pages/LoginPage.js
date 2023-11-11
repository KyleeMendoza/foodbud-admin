/* eslint-disable */
import React, { useEffect, useState } from "react";
// import Cookies from "js-cookie";
// import axios from "axios";
import { useNavigate } from "react-router";
import "../css/LoginPage.css";

const LoginPage = () => {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    // e.preventDefault();
    // const baseUrl = process.env.REACT_APP_BACKEND_URL;

    // try {
    //   const login = await axios.post(`${baseUrl}/user/authentication/login`, {
    //     identifier: identifier,
    //     password: password,
    //   });
    //   // console.log(login.data.userDetails);
    //   if (login.data.userDetails.user_id === "admin") {
    //     alert("User Login Successfully");
    //     const userToken = login.data.token; //GET THE TOKEN FROM BACKEND
    //     Cookies.set("userToken", userToken);
    //     navigate("/live");
    //   } else {
    //     alert("Login failed. Please check your credentials.");
    //   }
    // } catch (error) {
    //   console.error("Error during login:", error);
    //   alert("Please check your credentials or verify your account");
    // }

    //FOR THE MEAN TIME TO
    if (identifier === "admin" && password === "password123") {
      console.log("username: ", identifier);
      console.log("password: ", password);
      navigate("/admin");
    } else {
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