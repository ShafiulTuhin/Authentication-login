import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { registerWithEmailAndPassword } from "../firebase";

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const user = await registerWithEmailAndPassword(email, password);
      console.log(user);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex flex-col p-4 justify-center items-center">
      <h1 className="text-3xl my-4">Register</h1>

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
          className=" m-auto text-md text-white cursor-pointer p-1 border rounded-lg bg-purple-500 mt-2"
          type="submit"
          onClick={handleRegister}
        >
          Register
        </button>
      </form>
      <p className="my-2">
        Already have an account?
        <NavLink to="/login" className="underline">
          Sign In
        </NavLink>
        `
      </p>
    </div>
  );
};

export default Register;
