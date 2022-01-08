// import React, { useState } from "react";
// // import { Link } from "react-router-dom";
// import axios from "axios";
// import { useHistory } from "react-router";

// const Register = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const history = useHistory();
//   const submitData = async () => {
//     const url = "http://localhost:5000/api/user";

//     try {
//       const config = {
//         headers: {
//           "content-type": "application/json",
//         },
//       };

//       const res = await axios.post(url, { name, email, password }, config);
//       console.log(res.data);
//       if (res.data.token) {
//         history.push("/Login");
//       }
//     } catch (error) {
//       alert(error.response.data.msg);
//     }
//   };
//   return (
//     <div class="row mt-5">
//       <div class="col-md-6 m-auto">
//         <div class="card card-body">
//           <h1 class="text-center mb-3">
//             <i class="fas fa-user-plus"></i> Register
//           </h1>

//           {/* <div
//             class="alert alert-warning alert-dismissible fade show"
//             role="alert"
//           >
//             <button
//               type="button"
//               class="btn-close"
//               data-bs-dismiss="alert"
//               aria-label="Close"
//             ></button>
//           </div>

//           <div
//             class="alert alert-success alert-dismissible fade show"
//             role="alert"
//           >
//             <button
//               type="button"
//               class="btn-close"
//               data-bs-dismiss="alert"
//               aria-label="Close"
//             ></button>
//           </div>

//           <div
//             class="alert alert-warning alert-dismissible fade show"
//             role="alert"
//           >
//             <button
//               type="button"
//               class="btn-close"
//               data-bs-dismiss="alert"
//               aria-label="Close"
//             ></button>
//           </div> */}

//           {/* <form action="/users/register" method="POST"> */}
//           <div class="form-group">
//             <label for="name">Name</label>
//             <input
//               type="name"
//               id="name"
//               name="name"
//               class="form-control"
//               placeholder="Enter Name"
//               // value="<%= typeof name != 'undefined' ? name : '' %>"
//               value={name}
//               onChange={(e) => {
//                 setName(e.target.value);
//               }}
//             />
//           </div>
//           <div class="form-group">
//             <label for="email">Email</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               class="form-control"
//               placeholder="Enter Email"
//               // value="<%= typeof email != 'undefined' ? email : '' %>"
//               value={email}
//               onChange={(e) => {
//                 setEmail(e.target.value);
//               }}
//             />
//           </div>
//           <div class="form-group">
//             <label for="password">Password</label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               class="form-control"
//               placeholder="Create Password"
//               // value="<%= typeof password != 'undefined' ? password : '' %>"
//               value={password}
//               onChange={(e) => {
//                 setPassword(e.target.value);
//               }}
//             />
//           </div>
//           <div class="form-group">
//             <label for="password2">Confirm Password</label>
//             <input
//               type="password"
//               id="password2"
//               name="password2"
//               class="form-control"
//               placeholder="Confirm Password"
//               // value="<%= typeof password2 != 'undefined' ? password2 : '' %>"
//             />
//           </div>
//           <button class="btn btn-primary btn-block" onClick={submitData}>
//             Register
//           </button>
//           {/* </form> */}
//           <p class="lead mt-4">
//             Have An Account?
//             <a href="/Login">Login</a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;
