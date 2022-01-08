import React, { Component } from "react";
import AdminHeader from "./AdminHeader";
class response extends Component {
  constructor() {
    super();
    this.state = {
      response: null,
    };
  }

  updateUser() {
    fetch(
      "http://localhost:5000/api/StudentDoubt/mentorResponse/" +
        this.props.match.params.id,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(this.state),
      }
    ).then((result) => {
      result.json().then((res) => {
        alert("User has been Updated");
        console.log("User Successfully updated");
      });
    });
  }
  render() {
    // console.warn(this.state);
    // console.log(this.props.match.params.id);
    return (
      <div>
        <AdminHeader />
        <a href="/Admin">
          <i className="fas fa-backward fa-2x"> go back</i>
        </a>

        <h2 className="text-center text-primary">Update Details Here</h2>
        <div className="container">
          <div className="form-group">
            <label htmlFor="name">Response </label>
            <textarea
              rollno="doubts"
              id="dbt"
              cols="228"
              rows="15"
              value={this.state.response}
              onChange={(e) => {
                this.setState({ response: e.target.value });
              }}
            ></textarea>
          </div>
        </div>

        <br></br>
        <div className="container">
          <button
            className="btn btn-success btn-lg btn-block"
            onClick={() => {
              this.updateUser();
            }}
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default response;
