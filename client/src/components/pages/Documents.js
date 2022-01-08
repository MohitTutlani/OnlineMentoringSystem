import React, { useState, useEffect } from "react";
import Header from "../Admin/AdminHeader";
import Footer from "../pages/Footer";

const Documents = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  //@get data functionalty
  async function getData() {
    let result = await fetch("http://localhost:5000/api/fileUpload");
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
      <Header />
      <br></br>
      <a href="/Admin">
        <i className="fas fa-backward fa-2x"> go back</i>
      </a>
      <br />
      <div className="container">
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th>Student Rollno</th>
              <th>Documents uploaded</th>
              <th>Download</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, i) => (
              <tr key={i}>
                <td>{item.fileName}</td>
                <td>
                  <img
                    src={`http://localhost:5000/${item.filePath}`}
                    height="50px"
                    width="100px"
                    className="img-responsive"
                    alt=" "
                  />
                </td>
                <td>
                  <a href={`http://localhost:5000/${item.filePath}`} download>
                    <i class="fa fa-download" aria-hidden="true"></i>
                  </a>
                </td>
                {/* <td>
                  <button
                    className="btn-danger"
                    onClick={() => deleteUser(item._id)}
                  >
                    {" "}
                    &#10008;
                  </button>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
};

export default Documents;
