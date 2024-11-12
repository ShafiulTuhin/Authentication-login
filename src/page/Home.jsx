import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

const Home = () => {
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);
  console.log(user);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/login");
        console.log("signOut");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  if (loading) return <p>User info loading...</p>;
  return (
    <>
      <div>Welcome,{user.email}</div>
      <button
        onClick={handleLogout}
        className="bg-black text-white rounded p-1"
      >
        Logout
      </button>
    </>
  );
};

export default Home;
