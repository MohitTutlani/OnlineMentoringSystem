/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from "react";
import { getSingleFiles } from "../../data/api";

const singlefile = () => {
  const [singlefiles, setsinglefiles] = useState([]);

  const getSingleFileList = async () => {
    try {
      const fileList = await getSingleFiles();
      setsinglefiles(fileList);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleFileList();
  }, []);
  return (
    <div>
      <div className="container">
        <h3 className="text-danger font-weight-border border-bottom text-center">
          Documents
        </h3>
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col-6">
              <h4 className="text-success font-weight-bold">
                {" "}
                Documents List{" "}
              </h4>
              <div className="row">
                {singlefiles.map((file, index) => (
                  <div className="col-6">
                    <div className="card mb-2 border-0 p-0">
                      <img
                        src={`http://localhost:5000/${file.filePath}`}
                        height="100%"
                        className="card-img-top img-responsive"
                        alt="img"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default singlefile;
