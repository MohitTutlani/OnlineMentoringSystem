import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";
// import Footer from "../pages/Footer";
import Header from "../pages/Header";

const AddUser = () => {
  const [name, setName] = useState("");
  const [fname, setFname] = useState("");
  const [mname, setMname] = useState("");
  const [email, setEmail] = useState("");
  const [pemail, setPemail] = useState("");
  const [contact, setContact] = useState("");
  const [fcontact, setFcontact] = useState("");
  const [mcontact, setMcontact] = useState("");

  const history = useHistory();
  const submitData = async () => {
    const url = "http://localhost:5000/api/student";

    try {
      const config = {
        headers: {
          "content-type": "application/json",
        },
      };

      const res = await axios.post(
        url,
        {
          name,
          fname,
          mname,
          email,
          pemail,
          contact,
          fcontact,
          mcontact,
        },
        config
      );
      console.log(res.data);
      if (res.data.token) {
        history.push("/Index");
      }
    } catch (error) {
      alert(error.response.data.msg);
    }
  };

  return (
    <div>
      <Header />
      <br />
      <a href="/Index">
        <i className="fas fa-backward fa-2x"> go back</i>
      </a>
      <br />
      <br />
      <h2 className="text-center text-primary">Fill In All The Details</h2>
      <div className="container">
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></input>
        </div>
      </div>
      <div className="container">
        <div className="form-group">
          <label htmlFor="mother's name">Father's Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Father's name"
            value={fname}
            onChange={(e) => {
              setFname(e.target.value);
            }}
          ></input>
        </div>
      </div>
      <div className="container">
        <div className="form-group">
          <label htmlFor="mother's name">Mother's Name</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter Mother's Name"
            value={mname}
            onChange={(e) => {
              setMname(e.target.value);
            }}
          ></input>
        </div>
      </div>
      <div className="container">
        <div className="form-group">
          <label htmlFor="emal">Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
          <small id="emailHelp" className="form-text text-muted ">
            We'll never share your email with anyone else.
          </small>
        </div>
      </div>
      <div className="container">
        <div className="form-group">
          <label htmlFor="parent's email">Parent's Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter Parent's email"
            value={pemail}
            onChange={(e) => {
              setPemail(e.target.value);
            }}
          ></input>
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
      </div>
      <div className="container">
        <div className="form-group">
          <label htmlFor="contact">Personal Contact</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Personal Contact Number"
            value={contact}
            onChange={(e) => {
              setContact(e.target.value);
            }}
          ></input>
        </div>
      </div>
      <div className="container">
        <div className="form-group">
          <label htmlFor="father's contact">Father's Contact</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter Father's Contact"
            value={fcontact}
            onChange={(e) => {
              setFcontact(e.target.value);
            }}
          ></input>
        </div>
      </div>
      <div className="container">
        <div className="form-group">
          <label htmlFor="mother's contact">Mother's Contact</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Mother's Contact"
            value={mcontact}
            onChange={(e) => {
              setMcontact(e.target.value);
            }}
          ></input>
        </div>
      </div>

      <br></br>
      <div className="container">
        <button className="btn btn-success btn-lg" onClick={submitData}>
          Submit
        </button>
      </div>
    </div>
  );
};
export default AddUser;
