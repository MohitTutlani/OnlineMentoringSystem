import { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import AddUser from "./components/pages/AddUser";
import Index from "./components/pages/Index";
import Admin from "./components/Admin/Admin";
import StudentDoubt from "./components/pages/StudentDoubt";
import AdminUserRegistration from "./components/Admin/AdminUserRegistration";
import Show from "./components/Admin/Show";
import AdminLogin from "./components/Admin/AdminLogin";
import ShowDoubts from "./components/pages/ShowDoubts";
import StudentDoubts from "./components/Admin/StudentDoubts";
import upload from "./components/pages/upload";
import StudentDetails from "./components/Admin/StudentDetails";
import Responded from "./components/Admin/Responded";
import update from "./components/Admin/update";
import Alerts from "./components/Admin/Alerts";
import superAdmin from "./components/superAdmin/superAdmin";
import SuperAdminHeader from "./components/superAdmin/SuperAdminHeader";
import mentorRegistration from "./components/superAdmin/mentorRegistration";
import Doubt from "./components/superAdmin/Doubt";
import superAdminLogin from "./components/superAdmin/superAdminLogin";
import Documents from "./components/pages/Documents";
import fileupload from "./screens/fileupload";
import singlefile from "./components/pages/singlefile";
import Showw from "./components/Admin/Showw";
import forgotPassword from "./components/Admin/forgotPassword";
import response from "./components/Admin/response";
import DisplayAlerts from "./components/Admin/DisplayAlerts";

function App() {
  return (
    <Router>
      <Fragment>
        <Route exact path="/" component={Login} />
        <Route path="/Index" component={Index} />
        <Route path="/AddUser" component={AddUser} />
        <Route path="/Admin" component={Admin} />
        <Route path="/StudentDoubt" component={StudentDoubt} />
        <Route
          path="/AdminUserRegistration"
          component={AdminUserRegistration}
        />
        <Route path="/Show" component={Show} />
        <Route path="/AdminLogin" component={AdminLogin} />
        <Route path="/ShowDoubts" component={ShowDoubts} />
        <Route path="/StudentDoubts" component={StudentDoubts} />
        <Route path="/upload" component={upload} />
        <Route path="/StudentDetails" component={StudentDetails} />
        <Route path="/Responded" component={Responded} />
        <Route path="/update/:id" component={update} />
        <Route path="/Alerts" component={Alerts} />
        <Route path="/superAdmin" component={superAdmin} />
        <Route path="/SuperAdminHeader" component={SuperAdminHeader} />
        <Route path="/mentorRegistration" component={mentorRegistration} />
        <Route path="/Doubt" component={Doubt} />
        <Route path="/superAdminLogin" component={superAdminLogin} />
        <Route path="/Documents" component={Documents} />
        <Route path="/fileupload" component={fileupload} />
        <Route path="/singlefile" component={singlefile} />
        <Route path="/Showw" component={Showw} />
        <Route path="/forgotPassword" component={forgotPassword} />
        <Route path="/response/:id" component={response} />
        <Route path="/DisplayAlerts" component={DisplayAlerts} />
      </Fragment>
    </Router>
  );
}

export default App;
