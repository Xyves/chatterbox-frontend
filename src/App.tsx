import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { defaultSystem } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import Layout from "./components/Layout/Layout";
import Chat from "./pages/Chat";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <ChakraProvider value={defaultSystem}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/chat" element={<Chat />}></Route>
            <Route path="/profile/:id" element={<Profile />}></Route>
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
