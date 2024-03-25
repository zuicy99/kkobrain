import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import Main from "../pages/Main";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="main">
        <div className="inner">{children}</div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
