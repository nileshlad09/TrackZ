import "./App.css";
import Navbar from "./Components/Navbar/Navbar.js";
import Home from "./Components/Home/Home.js";
import Admin from "./Components/Admin/Admin.js";
import SimpleUser from "./Components/Signup/SimpleUser";
import CommanLogin from "./Components/Login/CommanLogin";
import View from "./Components/JS/View";
import Notification from "./Components/JS/Notification";
import ProfileService from "./Components/JS/ProfileService";
import ProfileUser from "./Components/JS/ProfileUser";
import About from "./Components/About/About";
import Service from "./Components/Service/Service";
import Contact from "./Components/Contact/Contact";
import {Route, Routes } from "react-router-dom";
import UserState from "./context/user/UserState";
function App() {
  return (
    <>
    <UserState>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/Contact" element={<Contact />} />
          <Route exact path="/Service" element={<Service />} />
          <Route exact path="/SimpleUser" element={<SimpleUser />} />
          <Route exact path="/Admin" element={<Admin />} />
          <Route exact path="/CommanLogin" element={<CommanLogin />} />
          <Route exact path="/View/:name" element={<View />} />
          <Route exact path="/Notification" element={<Notification />} />
          <Route exact path="/ProfileService" element={<ProfileService />} />
          <Route exact path="/ProfileUser" element={<ProfileUser />} />
        </Routes>
        </UserState>
    </>
  );
}

export default App;
