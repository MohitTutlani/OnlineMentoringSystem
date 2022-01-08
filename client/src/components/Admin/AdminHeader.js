import React from "react";

const AdminHeader = () => {
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
          <a href="/Admin" className="nav-brand text-dark">
            <h3>
              <i className="fa fa-user 2x text-primary"> Mentor Panel</i>
            </h3>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
