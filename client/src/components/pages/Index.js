import React, { useState, useEffect } from "react";
// import { useHistory } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

const Index = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  //@get data functionalty
  async function getData() {
    let result = await fetch("http://localhost:5000/api/alerts");
    result = await result.json();
    setData(result);
  }

  return (
    <div>
      <Header />
      <br></br>
      <div className="container">
        <h3 className="text-success">Important Notices</h3>
        <div className="alert alert-danger " role="alert">
          <ul>
            {data.map((item, i) => (
              <li key={i}>
                <p>{item.alert}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <hr />
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
                  Fill in Details here
                </h1>
                <br></br>
                <div className="box-nav d-flex justify-between">
                  <a href="/AddUser" className="border-shadow">
                    <h2 className="text-danger">
                      Add Details <i className="fas fa-users fa-2x"></i>
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
                <h1 className="card-title text-primary">Doubts here</h1>
                <br></br>
                <div className="box-nav d-flex justify-between">
                  <a href="/StudentDoubt" className="border-shadow">
                    <h2 className="text-danger">
                      Have Doubts/Queries{" "}
                      <i className="fas fa-question fa-2x"></i>
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
                <h1 className="card-title text-primary">Check your doubt</h1>
                <br></br>
                <div className="box-nav d-flex justify-between">
                  <a href="/ShowDoubts" className="border-shadow">
                    <h2 className="text-warning">
                      Check & Update <i className="fas fa-eye fa-2x"></i>
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
                <h1 className="card-title text-primary">Upload Documents</h1>
                <br></br>
                <div className="box-nav d-flex justify-between">
                  <a href="/fileUpload" className="border-shadow">
                    <h2 className="text-success">
                      Upload Documents <i className="fas fa-upload fa-2x"></i>
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

export default Index;
