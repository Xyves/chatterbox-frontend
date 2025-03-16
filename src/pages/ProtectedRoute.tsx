import { Navigate } from "react-router";
import { useAppSelector } from "../app/hooks";
import { AuthState } from "../types";

export const ProtectedRoute = ({ children }: { children: any }) => {
  const { user } = useAppSelector((state: { auth: AuthState }) => state.auth);

  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return children;
};
