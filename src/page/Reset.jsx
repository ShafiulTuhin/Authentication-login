import React, { useState } from "react";
import { passwordResetEmail } from "../firebase";
import { NavLink } from "react-router-dom";

const Reset = () => {
  const [email, setEmal] = useState("");
  return (
    <div className="flex flex-col p-4 justify-center items-center">
      <h1 className="text-3xl my-4">Reset Password</h1>
      <div>
        <input
          className="p-2 border box-border w-[300px] rounded-md border-gray-300 mb-3"
          type="text"
          value={email}
          onChange={(e) => setEmal(e.target.value)}
          placeholder="Enter email address"
        />
        <button
          className="m-auto text-md text-white cursor-pointer p-1 border rounded-lg bg-purple-500 mt-2 ml-2"
          onClick={() => passwordResetEmail(email)}
        >
          Send Reset Email
        </button>
      </div>
      <div className="">
        <p className="my-2">
          If you have account ||
          <NavLink to="/login" className="underline">
            Sign In
          </NavLink>
        </p>

        <p className="my-2">
          Dont have account? ||
          <NavLink to="/register" className="underline">
            Sign Up
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Reset;
