import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import { RootState } from "../app/store";
import { useAppSelector } from "../app/hooks";

export const ProtectedRoute = ({ children }: { children: any }) => {
  const { loading, user, userToken } = useAppSelector(
    (state: RootState) => state.auth
  );
  console.log("Auth user is:", user);
  if (!user) {
    return <Navigate to="/" replace />;
  }
  return children;
};
