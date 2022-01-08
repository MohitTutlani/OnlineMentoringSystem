import React, { useEffect, useState } from "react";
// import { useHistory } from "react-router";
import { Link } from "react-router-dom";

const Showw = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  //@delete functionality

  async function deleteUser(_id) {
    let result = await fetch("http://localhost:5000/api/Student/" + _id, {
      method: "DELETE",
    });

    result = await result.json();
    console.warn(result);
    getData();
  }

  //@update fields functionality
  async function updateUser() {}
  //@get data functionalty
  async function getData() {
    let result = await fetch("http://localhost:5000/api/Student");
    result = await result.json();
    setData(result);
  }

  return (
    <div>
      <div className="container">
        <br />
        <h1 className="text-primary text-center">Students Detail</h1>
        <hr />
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th>Student ID</th>
              <th>Name</th>
              <th>Father's Name</th>
              <th>Mother's Name</th>
              <th>Personal Email</th>
              <th>Parent's Email</th>
              <th>Personal Contact</th>
              <th>Father's Contact</th>
              <th>Mother's Contact</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, i) => (
              <tr key={i}>
                <td>{item._id}</td>
                <td>{item.name}</td>
                <td>{item.fname}</td>
                <td>{item.mname}</td>
                <td>{item.email}</td>
                <td>{item.pemail}</td>
                <td>{item.contact}</td>
                <td>{item.fcontact}</td>
                <td>{item.mcontact}</td>
                <td>
                  <Link to={"/update/" + item._id}>
                    <button onClick={() => updateUser(item._id)}>
                      {" "}
                      &#9986;
                    </button>
                  </Link>
                </td>
                <td>
                  <button onClick={() => deleteUser(item._id)}>
                    {" "}
                    &#10008;
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Showw;
