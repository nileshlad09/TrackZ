import React, { useState, useContext } from "react";
import { NavLink} from "react-router-dom";
import { Link } from "react-scroll";
import "./Navbar.css";
// import AOS from "aos";
import "aos/dist/aos.css";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate  } from "react-router-dom";
import userContext from "../../context/user/userContext";

const Navbar = () => {
  const context = useContext(userContext);
  const { notification,showAlert } = context;
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  

  const logout = () => {
    localStorage.removeItem("trackztoken");
    localStorage.removeItem("trackzroll");
    showAlert("success","logout successfully")
    navigate("/CommanLogin");
  };
  return (
    <div className="Navbar" id="Navbar">
      <Link to="Home" className="nav-logo">
        <span>TrackZ</span>
      </Link>
      <div className={`nav-items ${isOpen && "open"}`}>
        <NavLink to="/" onClick={() => setIsOpen(!isOpen)}>
          Home{" "}
        </NavLink>
        <NavLink to="/About" onClick={() => setIsOpen(!isOpen)}>
          About{" "}
        </NavLink>
        <NavLink to="/Service" onClick={() => setIsOpen(!isOpen)}>
          Service{" "}
        </NavLink>
        <NavLink to="/Contact" onClick={() => setIsOpen(!isOpen)}>
          Contact{" "}
        </NavLink>
        <NavLink  to={localStorage.getItem("trackztoken") ? "/Notification" :"/commanlogin"} onClick={() => setIsOpen(!isOpen)}>
          Notification
          <Badge badgeContent={notification.length} color="primary">
            <MailIcon color="white" />
          </Badge>
        </NavLink>
        {localStorage.getItem("trackztoken") ? (
          <NavLink onClick={logout} to="/commanlogin">
            Logout
          </NavLink>
        ) : (
          <NavLink to="/commanlogin" onClick={() => setIsOpen(!isOpen)}>
            Login
          </NavLink>
        )}
        <NavLink to={localStorage.getItem("trackztoken") ? "/ProfileUser" :"/commanlogin"} onClick={() => setIsOpen(!isOpen)}>
           <b 
             style={{
              borderRadius: "50%",
               backgroundColor: "orangered",
               padding:"8px",
             }}
          >
             <PersonIcon/> 
           </b> 
        </NavLink>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};
export default Navbar;
