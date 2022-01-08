import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router";

const Show = () => {
  const history = useHistory();
  /*This part is the same but with the async 
  const [fetchdata, setFetchdata] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      // console.log(request);
      // setFetchdata(request.data);
      // return request;
    }
    fetchData();
  }, [fetchUrl]);
  console.log(fetchdata);*/
  //Getting data from server
  const [fetchdata, setFetchdata] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/student")
      .then((res) => {
        setFetchdata(res.data);
        // console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //Editing the desired fields
  function update(_id) {
    console.log(_id);
    history.push("/update/" + _id);
  }

  //@del functionality Delete the Records
  async function del(_id) {
    console.log(_id);

    if (_id) {
      axios.delete("http://localhost:5000/api/Student/" + _id);
      console.log("deleted", _id);
    }
    alert(" Deleted Successfully");
    // if (window.confirm("Really want to delete?")) {
    //   axios.delete("http://localhost:5000/api/Student/" + _id);
    //   // console.log(_id);
    //   console.log("deleted");
    // }
    // alert(" Deleted Successfully");
  }
  return (
    <div>
      <div className="container">
        <a href="/Admin">
          <i className="fas fa-backward fa-2x"> go back</i>
        </a>
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
            {fetchdata.map((data, i) => (
              <tr key={i}>
                {/* {console.log(data)} */}

                <td key={data._id}>{data._id}</td>
                <td>{data.name}</td>
                <td>{data.fname}</td>
                <td>{data.mname}</td>
                <td>{data.email}</td>
                <td>{data.pemail}</td>
                <td>{data.contact}</td>
                <td>{data.fcontact}</td>
                <td>{data.mcontact}</td>
                <td>
                  <button
                    className="btn btn-warning"
                    onClick={() => update(data._id)}
                  >
                    &#9986;
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      del(data._id);
                    }}
                  >
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

export default Show;
// {
//   fetchdata.map((detail) => <td key={detail._id}>{detail.name}</td>);
// }
