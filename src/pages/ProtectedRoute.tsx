import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router";

export const ProtectedRoute = ({ children }) => {
  const { user } = useSelector((state) => state.auth);
  console.log("Auth user is:", user);
  if (!user) {
    return <Navigate to="/" replace />;
  }
  return children;
};
