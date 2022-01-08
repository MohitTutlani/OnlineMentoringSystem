import React from "react";

const superAdminHeader = () => {
  return (
    <div>
      <header id="header">
        <nav>
          <div className="container">
            <div className="text-center">
              <p className="nav-brand text-dark">Mentor's Management</p>
            </div>
          </div>
        </nav>
      </header>
      <br />
      <div className="container">
        <div className="text-center">
          <a href="/superAdmin" className="nav-brand text-dark">
            <h3>
              <i className="fa fa-user 2x text-primary"> Admin Panel</i>
            </h3>
          </a>
        </div>
      </div>
      <a href="/superAdmin">
        <i className="fas fa-backward fa-2x"> go back</i>
      </a>
    </div>
  );
};

export default superAdminHeader;
