import { useHistory } from "react-router";
import React, { useState } from "react";
import AdminHeader from "./AdminHeader";
import Footer from "../pages/Footer.js";
import axios from "axios";
// import { response } from "express";

const Alerts = () => {
  const [alert, setAlert] = useState("");
  const history = useHistory();

  const submitData = async () => {
    const url = "http://localhost:5000/api/alerts";

    try {
      const config = {
        headers: {
          "content-type": "application/json",
        },
      };

      const res = await axios.post(url, { alert }, config);
      console.log(res.data);
      if (res.data.alert) {
        history.push("/Alerts");
      }
    } catch (error) {
      console.log(error.response.data.msg);
    }
  };

  function alert1() {
    const value = { alert: "Every Student Have there Exam on 17-05-2021" };

    // .then((response) => this.setState({ alertID: response.data.id }));

    if (window.confirm("Want to Post this?")) {
      axios.post("http://localhost:5000/api/alerts", value);
      // console.log(value);
      console.log("Data is posted successfully", value);
    }
  }
  function alert2() {
    const value = { alert: "Tomorrow there will be xyz Competition" };

    // .then((response) => this.setState({ alertID: response.data.id }));

    if (window.confirm("Want to Post this?")) {
      axios.post("http://localhost:5000/api/alerts", value);
      // console.log(value);
      console.log("Data is posted successfully", value);
    }
  }

  return (
    <div>
      <AdminHeader />
      <br />

      <a href="/Admin">
        <i className="fas fa-backward fa-2x"> go back</i>
      </a>

      <hr />

      <div className="container">
        <div className="text-right">
          <a href="/DisplayAlerts">
            <i class="fa fa-desktop fa-2x" aria-hidden="true">
              Display Alerts
            </i>
          </a>
        </div>
        <div className="form-group">
          <label htmlFor="alert">Alerts Field</label>
          <input
            type="text"
            id="alert"
            name="alert"
            className="form-control"
            placeholder="Write something..."
            value={alert}
            onChange={(e) => {
              setAlert(e.target.value);
            }}
            required
          />

          <br />
          <button className="btn btn-success btn-lg " onClick={submitData}>
            Add
          </button>
        </div>
        <hr />
        <br />
        <button
          className="btn btn-warning btn-block btn-lg"
          onClick={() => {
            alert1();
          }}
        >
          <h3>Every Student Have there Exam on 17-05-2021</h3>{" "}
        </button>
        <br />

        <button
          className="btn btn-primary btn-block btn-lg"
          onClick={() => {
            alert2();
          }}
        >
          <h3>Tomorrow there will be xyz Competition</h3>{" "}
        </button>
      </div>
      <hr />

      <Footer />
    </div>
  );
};

export default Alerts;
