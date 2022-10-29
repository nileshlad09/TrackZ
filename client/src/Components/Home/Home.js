import React, { useEffect, useState } from "react";
import "./Home.css";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Service from "../Service/Service";
import Footer from "../Footer/Footer";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import NavigationIcon from "@mui/icons-material/Navigation";
import { Link } from "react-scroll";
import Tooltip from "@mui/material/Tooltip";
import BanarImage from "../images/BanarImage.png";

import {useContext} from "react";
import userContext from "../../context/user/userContext";


function Home() {

  const context = useContext(userContext);
  const {  getUser, getUsersp, getNotification } = context;
  useEffect(()=>{
      console.log("useEffect in Home");
      if (localStorage.getItem("trackzroll") === "cus") {
          getUser();
          getNotification()
      }
      else{
        getUsersp();
        getNotification()
      }
  }, []);



  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [top, settop] = useState(false);

  const handleClose = () => {
    settop(false);
  };

  const handleOpen = () => {
    settop(true);
  };
  return (
    <>
      <div id="Home" className="BannerContainer">
        <header className="head">
          <div className="h-text">
            <h2 >TrackZ</h2>
            <h1 data-aos="fade-right">
              WEL<span style={{ color: "brown" }}>CO</span>ME
            </h1>
            <p data-aos="fade-left">First Platform to connect</p>
            <p data-aos="fade-right">Hawkers and Customers</p>
            <p data-aos="fade-left">directly</p>
              <div  className="HomeBtn">
              <NavLink className="btn primary-btn" to="/About" id="order">
                About Us
              </NavLink>
              <NavLink className="btn secondary-btn"  to="/Service" id="order2">
                Our Services
              </NavLink>
              </div>
          </div>
          <div className="image">
            <img src={BanarImage} alt="Banner" data-aos="fade-left" />
          </div>
        </header>
        <Link to="Navbar">
          <Tooltip
            open={top}
            onClose={handleClose}
            onOpen={handleOpen}
            title="top"
          >
            <Box
              sx={{ "& > :not(style)": { m: 1 } }}
              style={{ position: "fixed", right: "10px", bottom: "20px" }}
              className="tops"
            >
              <Fab
                variant="extended"
                size="small"
                color="primary"
                aria-label="Top"
              >
                <NavigationIcon />
              </Fab>
            </Box>
          </Tooltip>
        </Link>
      </div>
      <About />
      <Service />
      <Contact />
      <Footer />
    </>
  );
}
export default Home;