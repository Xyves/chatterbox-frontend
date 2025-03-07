import Navbar from "./Navbar";
import { Outlet } from "react-router";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="flex flex-col h-full min-h-screen">
      <Navbar />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
