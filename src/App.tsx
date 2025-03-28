import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { defaultSystem } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import Layout from "./components/Layout/Layout";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ErrorPage from "./pages/ErrorPage";
import { ProtectedRoute } from "./pages/ProtectedRoute";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
//@ts-ignore
import { logout } from "./features/authSlice";
import ProfileSettings from "./pages/ProfileSettings";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("userToken"); // Check token in local storage

    if (!token) {
      dispatch(logout()); // Clear state if no token exists
    }
  }, [dispatch]);
  const [isFriendListOpen, setFriendListOpen] = useState(false);

  const onOpenFriendList = () => setFriendListOpen((prev) => !prev);
  const onCloseFriendList = () => setFriendListOpen(false);
  return (
    <ChakraProvider value={defaultSystem}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Layout onOpenFriendList={onOpenFriendList} />}
          >
            <Route index element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route
              path="/chat"
              element={
                <ProtectedRoute>
                  <Chat
                    isFriendListOpen={isFriendListOpen}
                    onCloseFriendList={onCloseFriendList}
                  />
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="/chat/:id"
              element={
                <ProtectedRoute>
                  <Chat
                    isFriendListOpen={isFriendListOpen}
                    onCloseFriendList={onCloseFriendList}
                  />
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="/settings"
              element={
                <ProtectedRoute>
                  <ProfileSettings />
                </ProtectedRoute>
              }
            ></Route>
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
