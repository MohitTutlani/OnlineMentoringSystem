/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import { singleFileUpload } from "../data/api";
import Header from "../components/pages/Header";
import Footer from "../components/pages/Footer";
import { getSingleFiles } from "../data/api";

const fileupload = () => {
  const [singleFile, setSingleFile] = useState("");

  const SingleFileChange = (e) => {
    setSingleFile(e.target.files[0]);
  };

  const uploadSingleFile = async () => {
    const formData = new FormData();
    formData.append("file", singleFile);
    await singleFileUpload(formData);
    console.log(singleFile);
  };

  const getSingleFileList = async () => {
    try {
      const fileLists = await getSingleFiles();

      setSingleFile(fileLists);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getSingleFileList();
  }, []);

  return (
    <div>
      <Header />
      <div className="container">
        <div className="row mt-3">
          <div className="col-6">
            <div className="form-group">
              <label>Choose File</label>
              <input
                type="file"
                className="form-control"
                onChange={(e) => SingleFileChange(e)}
              />
            </div>
            <div className="row">
              <div className="col-10">
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => uploadSingleFile()}
                >
                  Upload
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default fileupload;
