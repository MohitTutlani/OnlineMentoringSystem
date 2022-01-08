import React, { useState, useEffect } from "react";
import Header from "../pages/Header";
import Footer from "../pages/Footer";

const ShowDoubts = () => {
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
  async function deleteUser(_id) {
    let result = await fetch("http://localhost:5000/api/StudentDoubt/" + _id, {
      method: "DELETE",
    });

    result = await result.json();
    console.warn(result);
    getData();
  }

  return (
    <div>
      <Header />
      <br></br>
      <a href="/Index">
        <i className="fas fa-backward fa-2x"> go back</i>
      </a>
      <br />
      <div className="container">
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th>Your Roll no</th>
              <th>Your Doubt</th>
              <th>Response</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, i) => (
              <tr key={i}>
                <td>{item.rollno}</td>
                <td>{item.doubt}</td>
                <td>{item.response}</td>
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

export default ShowDoubts;
