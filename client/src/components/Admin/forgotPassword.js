/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import AdminHeader from "./AdminHeader";
import Footer from "../pages/Footer";
import { useHistory } from "react-router";

const forgotPassword = () => {
  const [email, setEmail] = useState("");
  const history = useHistory();

  const fireData = () => {
    fetch("http://localhost:5000/api/mentor/forgotPassword", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.email);
        if (data.error) {
          console.log(data.error);
        } else {
          console.log(data);
          history.push("/AdminLogin");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <AdminHeader />
      <div className="container">
        <h1 className="text-danger text-center">Forgot Password</h1>
        <br />

        <div className="form-group">
          <label htmlFor="Email">
            <h2
              className="text-danger"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            >
              Enter email
            </h2>
          </label>
          <input
            className="form-control"
            type="email"
            name="forgot-password"
            id="forgot-password"
          />
          <button className="btn btn-danger btn-lg" onClick={() => fireData()}>
            {" "}
            reset password
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default forgotPassword;
