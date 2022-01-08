import React from "react";
import "../../App.css";

const footer = () => {
  return (
    <div>
      <footer id="footer">
        <h3>
          @ Full Stack &nbsp;MERN&nbsp;
          <span dangerouslySetInnerHTML={{ __html: "&copy;" }} />
          AK
          {/* <a href="#">Go Home</a> */}
        </h3>
      </footer>
    </div>
  );
};

export default footer;
