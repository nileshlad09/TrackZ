import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Link } from 'react-scroll';
// import { MdContactPage } from 'react-icons/md'
// import { AiOutlineCustomerService } from 'react-icons/ai'
// import { FcAbout } from 'react-icons/fc'
// import { FcHome } from 'react-icons/fc'
// import { BiLogIn } from 'react-icons/bi'
import './Navbar.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';



const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])
console.log(window.location.hash);

    return (
        <div className="Navbar" id="Navbar">
            <Link to='Home' className="nav-logo"><span >TrackZ</span></Link>
            <div className={`nav-items ${isOpen && "open"}`}>
                <NavLink exact to="/"   className={`${window.location.hash === "#/ "} : "active" ? ""`} onClick={() => setIsOpen(!isOpen)}>Home  </NavLink>
                <NavLink to="/About" className={`${window.location.hash === "#/About"} : "active" ? ""`} onClick={() => setIsOpen(!isOpen)}>About </NavLink>
                <NavLink to="/Service" className={`${window.location.hash === "#/Service"} : "active" ? ""`} onClick={() => setIsOpen(!isOpen)}>Service </NavLink>
                <NavLink to="/Contact" className={`${window.location.hash === "#/Contact"} : "active" ? ""`} onClick={() => setIsOpen(!isOpen)}>Contact </NavLink>
                <NavLink to="/SimpleUser"  onClick={() => setIsOpen(!isOpen)}>SignUp</NavLink>
                <NavLink to="/Notification" className={`${window.location.hash === "#/Notification"} : "active" ? ""`} onClick={() => setIsOpen(!isOpen)}>
                    Notification<Badge badgeContent={4} color="primary">
                        <MailIcon color="white" />
                    </Badge>
                </NavLink>
                <NavLink to="/ProfileUser" onClick={() => setIsOpen(!isOpen)}><b style={{height:"10px",width:"10px",borderRadius:"50%",backgroundColor:"orangered",padding:"7px"}}>NA</b></NavLink>
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