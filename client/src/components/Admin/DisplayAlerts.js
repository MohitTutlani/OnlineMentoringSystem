import React, { useState, useEffect } from "react";
import AdminHeader from "./AdminHeader";
import Footer from "../pages/Footer";

const DeleteAlerts = () => {
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

  //@delete functionality
  async function deleteUser(_id) {
    let result = await fetch("http://localhost:5000/api/alerts/" + _id, {
      method: "DELETE",
    });

    result = await result.json();
    console.warn(result);
    getData();
  }

  return (
    <div>
      <AdminHeader />
      <br></br>
      <a href="/Index">
        <i className="fas fa-backward fa-2x"> go back</i>
      </a>
      <br /> <hr />
      <div className="container">
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th>Alert Message</th>

              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, i) => (
              <tr key={i}>
                <td>{item.alert}</td>

                <td>
                  <button
                    className="btn-danger"
                    onClick={() => deleteUser(item._id)}
                  >
                    {" "}
                    &#10008;
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
};

export default DeleteAlerts;
