/* eslint-disable react-hooks/rules-of-hooks */
import { useHistory } from "react-router";
import React, { useState } from "react";
import axios from "axios";
import Footer from "../pages/Footer";

const superAdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const submitData = async () => {
    const url = "http://localhost:5000/api/admin/";

    try {
      const config = {
        headers: {
          "content-type": "application/json",
        },
      };

      const res = await axios.post(url, { email, password }, config);
      console.log(res.data);
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        history.push("/superAdmin");
      }
    } catch (error) {
      console.log(error.response.data.msg);
    }
  };
  return (
    <div>
      {/* <header id="header">
        <nav>
          <div className="container">
            <div className="text-center">
              <p className="nav-brand text-dark">Mentor's Management</p>
            </div>
          </div>
        </nav>
      </header>
      <br /> */}
      {/* <div className="container">
        <div className="text-center">
          <a href="/AdminLogin" className="nav-brand text-dark">
            <h3>
              <i className="fa fa-user 2x text-primary"> Admin Panel</i>
            </h3>
          </a>
        </div>
      </div> */}

      <div className="text-center">
        <p className="nav-brand text-dark">Mentor's Management</p>
      </div>
      <div className="row mt-5">
        <div className="col-md-6 m-auto">
          <div className="card card-body">
            <h1 className="text-center mb-3">
              <i className="fas fa-sign-in-alt"></i> Login
            </h1>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="form-control"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                required
              />
            </div>
            <button
              type="button"
              className="btn btn-primary btn-block"
              // onClick={() => {
              //   History.push("/Dashboard");
              // }}

              onClick={submitData}
            >
              Login
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default superAdminLogin;
