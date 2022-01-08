import React from "react";
import AdminHeader from "./AdminHeader";
import Footer from "../pages/Footer";

const Responded = () => {
  return (
    <div>
      <AdminHeader />
      <br />
      <a href="/StudentDoubts">
        <i className="fas fa-backward fa-2x"> go back</i>
      </a>
      <Footer />
    </div>
  );
};

export default Responded;
