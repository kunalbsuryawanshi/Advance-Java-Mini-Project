import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import AboutUS from "./Pages/AboutUs";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import NewNavbar from "./Pages/Navbar";
import Contact from "./Pages/ContactUs";
import Home from "./Pages/Homepage";
import CandidateLogin from "./Pages/CandidateLogin";
import FacultyLogin from "./Pages/FacultyLogin";
import CandidateForgotPassword from "./Pages/CandidateForgotPassword";
import FacultyForgetPass from "./Pages/FacultyForgetPass";
import StudentRegistration1 from "./Pages/demo";
import Facultyreg from "./Pages/demo1";
import MyTodo from "./Pages/demo4";
import MyTodoList from "./Pages/demo5";
import InNavbar from "./Pages/InNavbar";
import MyUserList from "./Pages/UserList";
import InNavbar2 from "./Pages/InNavbar2";
import Applicationlist from "./Pages/ApplicationList";
import Courses from "./Pages/Courses";
import RaiseConcern from "./Pages/RaiseConcern";
import LeaveApplication from "./Pages/LeaveApplication";
import LeaveStatus from "./Pages/LeaveStatus";
import ComplaintStatus from "./Pages/ComplaintStatus";
import ComplaintRegistration from "./Pages/ComplaintRegistraition";
import DeleteComplaintRecord from "./Pages/DeleteComplaintRecord";
import DeleteLeaveRecord from "./Pages/DeleteLeaveRecord";
import UpdateLeaveApplication from "./Pages/UpdateLeaveApplication";
import UpdateComplaint from "./Pages/UpdateComplaint";
import Enquiries from "./Pages/Enquiries";
import FacultyComplaint from "./Pages/FacultyComplaint";
import FacultyLeaveApplication from "./Pages/FacultyLeaveApplication";
import FacultyLeaveDelete from "./Pages/FacultyLeaveDelete";
import FacultyComplaintDelete from "./Pages/FacultyComplaintDelete";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />

          <Route path="/aboutus" element={<AboutUS />} />
          <Route path="/studentlogin" element={<CandidateLogin />} />
          <Route path="/facultylogin" element={<FacultyLogin />} />
          <Route path="/contactus" element={<Contact />} />
          <Route
            path="/CandidateForgotPassword"
            element={<CandidateForgotPassword />}
          />
          <Route path="/FacultyForgetPass" element={<FacultyForgetPass />} />
          <Route
            path="/StudentRgistration"
            element={<StudentRegistration1 />}
          />
          <Route path="/falreg" element={<Facultyreg />} />
          <Route path="/Courses" element={<Courses />} />
          <Route path="/RaiseConcern" element={<RaiseConcern />} />
          <Route path="/RaiseConcern" element={<RaiseConcern />} />
          <Route path="/LeaveApplication" element={<LeaveApplication />} />
          <Route path="/LeaveStatus" element={<LeaveStatus />} />
          <Route path="/ComplaintStatus" element={<ComplaintStatus />} />
          <Route
            path="/ComplaintRegistration"
            element={<ComplaintRegistration />}
          />
          <Route
            path="/DeleteComplaintRecord"
            element={<DeleteComplaintRecord />}
          />
          <Route path="/DeleteLeaveRecord" element={<DeleteLeaveRecord />} />
          <Route
            path="/UpdateLeaveApplication"
            element={<UpdateLeaveApplication />}
          />
          <Route path="/UpdateComplaint" element={<UpdateComplaint />} />
          <Route path="/Enquiries" element={<Enquiries />} />
          <Route
            path="/FacultyLeaveApplication"
            element={<FacultyLeaveApplication />}
          />
          <Route path="/FacultyComplaint" element={<FacultyComplaint />} />
          <Route path="/FacultyLeaveDelete" element={<FacultyLeaveDelete />} />
          <Route
            path="/FacultyComplaintDelete"
            element={<FacultyComplaintDelete />}
          />

          <Route
            path="/newnav"
            element={
              <ProtectedRouteCan>
                <InNavbar />
              </ProtectedRouteCan>
            }
          />
          <Route
            path="/mytodo"
            element={
              <ProtectedRouteCan>
                <MyTodo />
              </ProtectedRouteCan>
            }
          />
          <Route
            path="/mytodolist"
            element={
              <ProtectedRouteCan>
                <MyTodoList />
              </ProtectedRouteCan>
            }
          />
          <Route
            path="/facnavbar"
            element={
              <ProtectedRoutefac>
                <InNavbar2 />
              </ProtectedRoutefac>
            }
          />
          <Route
            path="/userlist"
            element={
              <ProtectedRoutefac>
                <MyUserList />
              </ProtectedRoutefac>
            }
          />
          <Route
            path="/applist"
            element={
              <ProtectedRoutefac>
                <Applicationlist />
              </ProtectedRoutefac>
            }
          />

          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
function ProtectedRouteCan({ children }) {
  let loginStatus = localStorage.getItem("loginStatuscan");
  if (!loginStatus) {
    return <Navigate to={"/home"} replace={true} />;
  }

  return children;
}
function ProtectedRoutefac({ children }) {
  let loginStatus = localStorage.getItem("loginStatusfac");
  if (!loginStatus) {
    return <Navigate to={"/home"} replace={true} />;
  }

  return children;
}

export default App;
