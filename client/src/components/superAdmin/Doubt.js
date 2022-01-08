import React, { useState, useEffect } from "react";
import Footer from "../pages/Footer";
import SuperAdminHeader from "./SuperAdminHeader";

const Doubt = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  //@get data functionalty
  async function getData() {
    let result = await fetch("http://localhost:5000/api/StudentDoubt");
    result = await result.json();
    setData(result);
  }

  //@delete functionality
  // async function deleteUser(_id) {
  //   let result = await fetch("http://localhost:5000/api/StudentDoubt/" + _id, {
  //     method: "DELETE",
  //   });

  //   result = await result.json();
  //   console.warn(result);
  //   getData();
  // }

  return (
    <div>
      <SuperAdminHeader />
      <br></br>

      <br />
      <div className="container">
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th>Your Roll no</th>
              <th>Your Doubt</th>
              <th>Response</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, i) => (
              <tr key={i}>
                <td>{item.rollno}</td>
                <td>{item.doubt}</td>
                <td>{item.response}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
};

export default Doubt;
