import { useSelector } from "react-redux";
import { Navigate } from "react-router";

export const ProtectedRoute = () => {
  const { user } = useSelector((state) => state.auth);

  if (!user) {
    return <Navigate to="/" replace />;
  }
};
