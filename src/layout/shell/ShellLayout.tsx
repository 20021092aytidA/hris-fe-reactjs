import React from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import { Outlet } from "react-router-dom";

export default function ShellLayout() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen m-4">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
