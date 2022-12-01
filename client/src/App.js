import "./App.css";
import Navbar from "./Components/Navbar/Navbar.js";
import Home from "./Components/Home/Home.js";
import Serviceprovider  from "./Components/Signup/Serviceprovider";
import Customer from "./Components/Signup/Customer";
import CommanLogin from "./Components/Login/CommanLogin";
import View from "./Components/JS/View";
import Notification from "./Components/Notification/Notification";
import ProfileService from "./Components/JS/ProfileService";
import ProfileUser from "./Components/JS/ProfileUser";
import About from "./Components/About/About";
import Service from "./Components/Service/Service";
import Contact from "./Components/Contact/Contact";
import Alert from "./Components/JS/Alert"
import {Route, Routes } from "react-router-dom";
import UserState from "./context/user/UserState";
import Payment from "./Components/Payment/Payment";
import ForgotP from "./Components/Login/ForgotP";


function App() {
  
  return (
    <>


    <UserState>
        <Navbar />
        <Alert alert={alert}/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/Contact" element={<Contact />} />
          <Route exact path="/Service" element={<Service />} />
          <Route exact path="/SimpleUser" element={<Customer />} />
          <Route exact path="/Admin" element={<Serviceprovider />} />
          <Route exact path="/CommanLogin" element={<CommanLogin  />} />
          <Route exact path="/View/:name" element={<View />} />
          <Route exact path="/Notification" element={<Notification />} />
          <Route exact path="/ProfileService" element={<ProfileService />} />
          <Route exact path="/ProfileUser" element={<ProfileUser />} />
          <Route exact path="/Payment" element={<Payment />} />
          <Route exact path="/Forgotpassword" element={<ForgotP/>} />
        </Routes>
        </UserState>
    </>
  );
}

export default App;
