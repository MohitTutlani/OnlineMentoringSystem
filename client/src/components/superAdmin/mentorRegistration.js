/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import SuperAdminHeader from "./SuperAdminHeader";
import Footer from "../pages/Footer";

const mentorRegistration = () => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const history = useHistory();
  const submitData = async () => {
    const url = "http://localhost:5000/api/mentor/mentorSignup";

    try {
      const config = {
        headers: {
          "content-type": "application/json",
        },
      };

      const res = await axios.post(url, { email, password }, config);
      console.log(res.data);
      if (res.data.token) {
        history.push("/superAdmin");
      }
    } catch (error) {
      alert(error.response.data.msg);
    }
  };
  return (
    <div>
      <SuperAdminHeader />
      <br />

      <div className="row mt-5">
        <div className="col-md-6 m-auto">
          <div className="card card-body">
            <h1 className="text-center mb-3">
              <i className="fas fa-user-plus"></i> Register
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
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="form-control"
                placeholder="Create Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>

            <button className="btn btn-primary btn-block" onClick={submitData}>
              Register
            </button>
            {/* </form> */}
            <p className="lead mt-4">
              Have An Account?
              <a href="/Login">Login</a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default mentorRegistration;
