// import React from "react";
import { useHistory } from "react-router";
import React, { useState } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";
import Header from "../pages/Header";
import Footer from "../pages/Footer";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const submitData = async () => {
    const url = "http://localhost:5000/api/auth/login";

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
        history.push("/Index");
      }
    } catch (error) {
      console.log(error.response.data.msg);
    }
  };
  // const History = useHistory();
  return (
    <div>
      <Header />
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

export default Login;
