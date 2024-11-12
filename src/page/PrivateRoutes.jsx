import { useAuthState } from "react-firebase-hooks/auth";
import { Outlet, Navigate } from "react-router-dom";
import { auth } from "../firebase";

const PrivateRoutes = () => {
  const [user, loading, error] = useAuthState(auth);

  if (loading) return <p>User data loading...</p>;
  return <div>{user ? <Outlet /> : <Navigate to="/login" />}</div>;
};

export default PrivateRoutes;
