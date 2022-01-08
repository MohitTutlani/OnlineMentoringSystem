import React from "react";

const Header = () => {
  return (
    <header id="header">
      <nav>
        <div className="container">
          <div className="text-center">
            <a href="/Index" className="nav-brand text-dark">
              Mentor's Management
            </a>
          </div>
        </div>
        <br></br>
      </nav>
      <h1 className="text-primary text-center">Student Panel</h1>
      <br />
    </header>
  );
};

export default Header;
