import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import Header from "../pages/Header";
import Footer from "../pages/Footer";

const AdminUserRegistration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();
  const submitData = async () => {
    const url = "http://localhost:5000/api/user";

    try {
      const config = {
        headers: {
          "content-type": "application/json",
        },
      };

      const res = await axios.post(url, { name, email, password }, config);
      console.log(res.data);
      if (res.data.token) {
        history.push("/Admin");
      }
    } catch (error) {
      alert(error.response.data.msg);
    }
  };
  return (
    <div>
      <Header />
      <br />
      <a href="/Admin">
        <i className="fas fa-backward fa-2x"> go back</i>
      </a>
      <div class="row mt-5">
        <div class="col-md-6 m-auto">
          <div class="card card-body">
            <h1 class="text-center mb-3">
              <i class="fas fa-user-plus"></i> Register
            </h1>
            <div class="form-group">
              <label for="name">Name</label>
              <input
                type="name"
                id="name"
                name="name"
                class="form-control"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                class="form-control"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                class="form-control"
                placeholder="Create Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>

            <button class="btn btn-primary btn-block" onClick={submitData}>
              Register
            </button>
            {/* </form> */}
            <p class="lead mt-4">
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

export default AdminUserRegistration;
