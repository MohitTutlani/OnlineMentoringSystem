import { useHistory } from "react-router";

import React, { useState } from "react";
import axios from "axios";
import Header from "./Header";

const StudentDoubt = () => {
  const [rollno, setRollno] = useState("");
  // const [email, setEmail] = useState("");
  const [doubt, setDoubt] = useState("");
  const history = useHistory();

  const submitData = async () => {
    const url = "http://localhost:5000/api/StudentDoubt";

    try {
      const config = {
        headers: {
          "content-type": "application/json",
        },
      };

      const res = await axios.post(url, { rollno, doubt }, config);
      console.log(res.data);
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        history.push("/ShowDoubts");
      }
    } catch (error) {
      console.log(error.response.data.msg);
    }
  };

  return (
    <div className="container">
      <Header />
      <br />
      <a href="/Index">
        <i className="fas fa-backward fa-2x"> go back</i>
      </a>
      <br />
      <br />
      <h3 style={{ color: "red" }}>Only ask if you have genuine problem</h3>
      <br></br>
      <div>
        <h1 className="text-center">Doubts Section</h1>
      </div>
      <div className="form-group">
        <label htmlFor="rollno">Roll no:</label>
        <input
          type="number"
          className="form-control"
          placeholder="enter rollno.."
          value={rollno}
          onChange={(e) => {
            setRollno(e.target.value);
          }}
        />
      </div>

      {/* <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          className="form-control"
          placeholder="enter email.."
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div> */}

      <div className="form-group">
        <label htmlFor="doubt">Doubt</label>
        <div>
          <textarea
            rollno="doubts"
            id="dbt"
            cols="228"
            rows="15"
            value={doubt}
            onChange={(e) => {
              setDoubt(e.target.value);
            }}
          ></textarea>
        </div>
      </div>
      <div>
        <button className="btn btn-success btn-block" onClick={submitData}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default StudentDoubt;
