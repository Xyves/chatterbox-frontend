import { Navigate } from "react-router";
import { useAppSelector } from "../app/hooks";
import { AuthState } from "../types";

export const ProtectedRoute = ({ children }: { children: any }) => {
  const { loading, user } = useAppSelector(
    (state: { auth: AuthState }) => state.auth
  );

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  console.log("Auth user is:", user);
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return children;
};
