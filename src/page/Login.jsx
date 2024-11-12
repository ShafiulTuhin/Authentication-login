import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { loginWithEmailAndPassword, signInWithGoogle } from "../firebase";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const user = await loginWithEmailAndPassword(email, password);
      console.log(user);
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSocialLogin = async () => {
    const user = await signInWithGoogle();
    navigate("/home");
    console.log(user);
  };
  return (
    <div className="flex flex-col p-4 justify-center items-center">
      <h1 className="text-3xl my-4">Login</h1>

      <form className="flex flex-col">
        <div className="my-1">
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Write Email address"
            className="p-2 border box-border w-[300px] rounded-md border-gray-300 mb-3"
          />
        </div>
        <div className="">
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Write Password"
            className="p-2 border box-border w-[300px] rounded-md border-gray-300"
          />
        </div>
        <button
          className=" m-auto text-md text-white cursor-pointer p-2 border rounded-lg bg-purple-500 mt-2"
          type="submit"
          onClick={handleLogin}
        >
          Login
        </button>
        <button
          className=" m-auto text-md text-white cursor-pointer p-2 border rounded-lg bg-purple-800 mt-2"
          type="submit"
          onClick={handleSocialLogin}
        >
          Login with Google
        </button>
      </form>
      <p className="my-2">
        Not have an account?
        <NavLink to="/register" className="underline">
          Sign Up
        </NavLink>
      </p>
      <p className="my-2">
        Forgot Password?
        <NavLink to="/reset" className="underline">
          Reset here
        </NavLink>
        `
      </p>
    </div>
  );
};

export default Login;
