import React from "react";
import "../styles/style.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ArmadaFormsProvider } from "../context/form-context";

const Layout: React.FC = ({ children }) => {
  // client test = https://drafbox-backend-dev.herokuapp.com/api/project/5ea1575f8c9344001f9a89ff/forms

  return (
    <ArmadaFormsProvider client="https://drafbox-backend-dev.herokuapp.com/api/project/5ea1575f8c9344001f9a89ff/forms">
      <div>
        <Navbar />
        <hr />
        {children}
        <Footer />
      </div>
    </ArmadaFormsProvider>
  );
};

export default Layout;
