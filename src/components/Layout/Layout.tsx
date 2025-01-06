import Navbar from "./Navbar";
import { Outlet } from "react-router";
import Footer from "./Footer";

export default function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
