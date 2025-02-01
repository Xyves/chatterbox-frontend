import Navbar from "./Navbar";
import { Outlet } from "react-router";
import Footer from "./Footer";
import { Grid } from "@chakra-ui/react";

export default function Layout() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] !h-full">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
