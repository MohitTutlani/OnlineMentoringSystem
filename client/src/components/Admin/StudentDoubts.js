import React, { useEffect, useState } from "react";
import AdminHeader from "../Admin/AdminHeader";
import Footer from "../pages/Footer";
import { Link } from "react-router-dom";

const StudentDoubts = () => {
  const [fetchdata, setFetchdata] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    let result = await fetch("http://localhost:5000/api/StudentDoubt");
    result = await result.json();
    setFetchdata(result);
  }
  async function responseUser() {}
  return (
    <div>
      <AdminHeader />
      <div className="container">
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th>Student's Roll no</th>
              <th> Doubt</th>
              <th>Click</th>
            </tr>
          </thead>
          <tbody>
            {fetchdata.map((item, i) => (
              <tr key={i}>
                <td>{item.rollno}</td>
                <td>{item.doubt}</td>
                <td>
                  <Link to={"/response/" + item._id}>
                    <button
                      className="btn btn-success"
                      onClick={() => responseUser(item._id)}
                    >
                      {" "}
                      respond
                    </button>
                  </Link>
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

export default StudentDoubts;
