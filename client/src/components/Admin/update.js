import React, { Component } from "react";
import AdminHeader from "./AdminHeader";
class update extends Component {
  constructor() {
    super();
    this.state = {
      name: null,
      fname: null,
      mname: null,
      email: null,
      pemail: null,
      contact: null,
      fcontact: null,
      mcontact: null,
    };
  }
  componentDidMount() {
    fetch(
      "http://localhost:5000/api/student/" + this.props.match.params.id
    ).then((res) =>
      res.json().then((result) => {
        // console.warn(result);
        this.setState({
          name: result.name,
          fname: result.fname,
          mname: result.mname,
          email: result.email,
          pemail: result.pemail,
          contact: result.contact,
          fcontact: result.fcontact,
          mcontact: result.mcontact,
        });
      })
    );
  }

  updateUser() {
    fetch("http://localhost:5000/api/student/" + this.props.match.params.id, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(this.state),
    }).then((result) => {
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
        <a href="/StudentDetails">
          <i className="fas fa-backward fa-2x"> go back</i>
        </a>

        <h2 className="text-center text-primary">Update Details Here</h2>
        <div className="container">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              className="form-control"
              value={this.state.name}
              onChange={(e) => {
                this.setState({ name: e.target.value });
              }}
            ></input>
          </div>
        </div>
        <div className="container">
          <div className="form-group">
            <label htmlFor="mother's name">Father's Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Father's name"
              value={this.state.fname}
              onChange={(e) => {
                this.setState({ fname: e.target.value });
              }}
            ></input>
          </div>
        </div>
        <div className="container">
          <div className="form-group">
            <label htmlFor="mother's name">Mother's Name</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter Mother's Name"
              value={this.state.mname}
              onChange={(e) => {
                this.setState({ mname: e.target.value });
              }}
            ></input>
          </div>
        </div>
        <div className="container">
          <div className="form-group">
            <label htmlFor="emal">Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              value={this.state.email}
              onChange={(e) => {
                this.setState({ email: e.target.value });
              }}
            ></input>
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
        </div>
        <div className="container">
          <div className="form-group">
            <label htmlFor="parent's email">Parent's Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter Parent's email"
              value={this.state.pemail}
              onChange={(e) => {
                this.setState({ pemail: e.target.value });
              }}
            ></input>
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
        </div>
        <div className="container">
          <div className="form-group">
            <label htmlFor="contact">Personal Contact</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Personal Contact Number"
              value={this.state.contact}
              onChange={(e) => {
                this.setState({ contact: e.target.value });
              }}
            ></input>
          </div>
        </div>
        <div className="container">
          <div className="form-group">
            <label htmlFor="father's contact">Father's Contact</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Father's Contact"
              value={this.state.fcontact}
              onChange={(e) => {
                this.setState({ fcontact: e.target.value });
              }}
            ></input>
          </div>
        </div>
        <div className="container">
          <div className="form-group">
            <label htmlFor="mother's contact">Mother's Contact</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Mother's Contact"
              value={this.state.mcontact}
              onChange={(e) => {
                this.setState({ mcontact: e.target.value });
              }}
            ></input>
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
            Update
          </button>
        </div>
      </div>
    );
  }
}

export default update;

// const update = (props) => {
//   //@update Student fields by _ID
//   const [data, setData] = useState([]);
//   const [name, setName] = useState("");
//   const [fname, setFname] = useState("");
//   const [mname, setMname] = useState("");
//   const [email, setEmail] = useState("");
//   const [pemail, setPemail] = useState("");
//   const [contact, setContact] = useState("");

//   const [fcontact, setFcontact] = useState("");
//   const [mcontact, setMcontact] = useState("");

//   console.warn("props", props.match.params.id);
//   useEffect(async () => {
//     let result = await fetch(
//       "http://localhost:5000/api/Student/" + props.match.params.id
//     );
//     result = await result.json();
//     setData(result);
//   }, []);

//   async function updateUser() {
//     console.warn(name, fname, mname);
//   }

//   return (
//     <div>
//       <AdminHeader />

//       <h2 className="text-center text-primary">Update Details Here</h2>
//       <div className="container">
//         <div className="form-group">
//           <label htmlFor="name">Full Name</label>
//           <input
//             type="text"
//             className="form-control"
//             value={data.name}
//             onChange={(e) => setName(e.target.value)}
//           ></input>
//         </div>
//       </div>
//       <div className="container">
//         <div className="form-group">
//           <label htmlFor="mother's name">Father's Name</label>
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Enter Father's name"
//             value={data.fname}
//             onChange={(e) => setFname(e.target.value)}
//           ></input>
//         </div>
//       </div>
//       <div className="container">
//         <div className="form-group">
//           <label htmlFor="mother's name">Mother's Name</label>
//           <input
//             type="email"
//             className="form-control"
//             placeholder="Enter Mother's Name"
//             value={data.mname}
//             onChange={(e) => setMname(e.target.value)}
//           ></input>
//         </div>
//       </div>
//       <div className="container">
//         <div className="form-group">
//           <label htmlFor="emal">Email address</label>
//           <input
//             type="email"
//             className="form-control"
//             placeholder="Enter email"
//             value={data.email}
//             onChange={(e) => setEmail(e.target.value)}
//           ></input>
//           <small id="emailHelp" className="form-text text-muted">
//             We'll never share your email with anyone else.
//           </small>
//         </div>
//       </div>
//       <div className="container">
//         <div className="form-group">
//           <label htmlFor="parent's email">Parent's Email address</label>
//           <input
//             type="email"
//             className="form-control"
//             placeholder="Enter Parent's email"
//             value={data.pemail}
//             onChange={(e) => setPemail(e.target.value)}
//           ></input>
//           <small id="emailHelp" className="form-text text-muted">
//             We'll never share your email with anyone else.
//           </small>
//         </div>
//       </div>
//       <div className="container">
//         <div className="form-group">
//           <label htmlFor="contact">Personal Contact</label>
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Enter Personal Contact Number"
//             value={data.contact}
//             onChange={(e) => setContact(e.target.value)}
//           ></input>
//         </div>
//       </div>
//       <div className="container">
//         <div className="form-group">
//           <label htmlFor="father's contact">Father's Contact</label>
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Enter Father's Contact"
//             value={data.fcontact}
//             onChange={(e) => setFcontact(e.target.value)}
//           ></input>
//         </div>
//       </div>
//       <div className="container">
//         <div className="form-group">
//           <label htmlFor="mother's contact">Mother's Contact</label>
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Enter Mother's Contact"
//             value={data.mcontact}
//             onChange={(e) => setMcontact(e.target.value)}
//           ></input>
//         </div>
//       </div>

//       <br></br>
//       <div className="container">
//         <button
//           className="btn btn-success btn-lg btn-block"
//           onClick={updateUser}
//         >
//           Update
//         </button>
//       </div>
//     </div>
//   );
// };

// export default withRouter(update);
