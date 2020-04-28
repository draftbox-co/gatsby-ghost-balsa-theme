import React from "react";
import "../styles/style.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Navbar />
      <hr />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
