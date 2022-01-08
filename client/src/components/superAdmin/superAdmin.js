import React from "react";
// import { useHistory } from "react-router";
import Footer from "../pages/Footer";
import SuperAdminHeader from "./SuperAdminHeader";

const superAdmin = () => {
  // const history = useHistory();
  return (
    <div>
      <br />
      <SuperAdminHeader />
      <br />

      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <div
              className="card"
              style={{ width: "404px", height: "150px", alignItems: "center" }}
            >
              <div className="card-body">
                <h1 className="card-title text-primary">
                  Mentor Registrations
                </h1>
                <br></br>
                <div className="box-nav d-flex justify-between">
                  <a href="/mentorRegistration" className="border-shadow">
                    <h2 className="text-danger">
                      Register Mentor <i className="fas fa-users fa-2x"></i>
                    </h2>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div
              className="card"
              style={{ width: "404px", height: "150px", alignItems: "center" }}
            >
              <div className="card-body">
                <h1 className="card-title text-primary">
                  Students Doubt Section
                </h1>
                <br></br>
                <div className="box-nav d-flex justify-between">
                  <a href="/Doubt" className="border-shadow">
                    <h2 className="text-danger">
                      Check Doubts <i className="fas fa-question fa-2x"></i>
                    </h2>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <div
              className="card"
              style={{ width: "404px", height: "150px", alignItems: "center" }}
            >
              <div className="card-body">
                <h1 className="card-title text-primary">Student Full Detail</h1>
                <br></br>
                <div className="box-nav d-flex justify-between">
                  <a href="/StudentDetails" className="border-shadow">
                    <h2 className="text-warning">
                      Student Detail{" "}
                      <i className="fas fa-info-circle fa-2x"></i>
                    </h2>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default superAdmin;
