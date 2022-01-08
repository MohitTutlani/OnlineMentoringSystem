import React from "react";
// import { useHistory } from "react-router";

const Welcome = () => {
  // const history = useHistory();
  return (
    <div>
      <div className="row mt-5">
        <div className="col-md-6 m-auto">
          <div className="card card-body text-center">
            <h1>
              <i className="fab fa-node-js fa-3x"></i>
            </h1>
            <p>Create an account here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
