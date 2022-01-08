/* eslint-disable react-hooks/rules-of-hooks */
// import React from "react";
// import Header from "./Header";
// import Footer from "./Footer";
// import axios from "axios";

// const upload = () => {
//   const uploadFile = ({ target: { files } }) => {
//     console.log(files[0]);
//     let data = new FormData();
//     data.append("file", files[0]);

//     axios.post("http://localhost:5000/api/docs", data).then((res) => {
//       console.log(res);
//     });
//   };
//   return (
//     <div>
//       <Header />
//       <div className="container">
//         <label htmlFor="10th">10th Marksheet</label>
//         <div className="custom-file">
//           <input
//             type="file"
//             className="custom-file-input"
//             id="customFile"
//             onChange={uploadFile}
//           />
//           <label className="custom-file-label" htmlFor="customFile">
//             Choose file
//           </label>
//         </div>
//         <br />
//         <br />
//         <label htmlFor="12th">12th Marksheet</label>
//         <div className="custom-file">
//           <input type="file" className="custom-file-input" id="customFile" />
//           <label className="custom-file-label" htmlFor="customFile">
//             Choose file
//           </label>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default upload;

// import React, { Component } from "react";
// import Header from "./Header";
// import Footer from "./Footer";
// import axios from "axios";
// className App extends Component {
//   state = {
//     file: null,
//   };

//   handleFile(e) {
//     let file = e.target.files[0];
//     this.setState({ file: file });
//   }

//   handleUpload() {
//     console.log(this.state, "this state ");

//     axios({
//       url: "http:localhost:5000/api/docs",
//       method: "post",
//       headers: {
//         authorization: "ak",
//       },
//       data: FormData,
//     }).then(
//       (res) => {
//         console.log(res);
//       },
//       (err) => {
//         console.log(err);
//       }
//     );
//   }

//   render() {
//     return (
//       <div>
//         <Header />
//         <div className="container   ">
//           <label htmlFor="10th">10th Marksheet</label>
//           <div className="custom-file">
//             <input
//               type="file"
//               className="custom-file-input"
//               name="file"
//               id="customFile"
//               onChange={(e) => this.handleFile(e)}
//             />
//             <label className="custom-file-label" htmlFor="customFile">
//               Choose file
//             </label>
//             <button
//               className="btn btn-success"
//               onClick={(e) => this.handleUpload(e)}
//             >
//               upload
//             </button>
//           </div>
//         </div>

//         <Footer />
//       </div>
//     );
//   }
// }

// export default App;

import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Axios from "axios";
const upload = () => {
  const [file, setFile] = useState();
  const send = (event) => {
    const data = new FormData();
    data.append("file", file);

    Axios.post("http://httpbin.org/anything", data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    //to check what we are getting
    console.log(data);

    //axios post request
    // Axios.post("http://localhost:5000/api/uploads", data)
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };
  return (
    <div>
      <Header />

      <div className="container">
        <form action="#">
          <div className="custom-file">
            <div className="custom-file">
              <input
                type="file"
                className="custom-file-input"
                id="file"
                accept=".rar"
                onChange={(event) => {
                  const file = event.target.files[0];
                  setFile(file);
                }}
              />
              <label className="custom-file-label" htmlFor="customFile">
                Choose file
              </label>
            </div>
            <br />
            <br />
          </div>
        </form>
        <button className="btn btn-success btn-lg" onClick={send}>
          upload
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default upload;
