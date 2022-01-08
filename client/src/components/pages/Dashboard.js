import React from "react";
import { useHistory } from "react-router";
import Header from "./Header";

const Dashboard = () => {
  const History = useHistory();
  return (
    <div>
      <Header />
      <h1 className="mt-4">Welcome To Dashboard</h1>
      <p className="lead mb-3">
        Welcome
        <a href="/Login">Logout</a>
      </p>

      <hr />
      <button
        className="btn btn-primary"
        onClick={() => {
          History.push("/Index");
        }}
      >
        Add
      </button>

      {/* <div className="row">
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Add New Entries here</h5>
              <a href="" className="btn btn-outline-primary btn-lg btn-block">
                Add
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Display</h5>
              <a href="" className="btn btn-outline-warning btn-lg btn-block">
                Display
              </a>
            </div>
          </div>
        </div>

        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Search</h5>
              <button className="btn btn-outline-danger btn-lg btn-block">
                Search
              </button>
            </div>
          </div>
        </div>

        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Contact</h5>
              <button className="btn btn-outline-success btn-lg btn-block">
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
     */}
    </div>
  );
};

export default Dashboard;
