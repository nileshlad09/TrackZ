import React,{useEffect,useState} from 'react'
import '../CSS/Home.css'
import { NavLink } from "react-router-dom"
import AOS from 'aos'
import 'aos/dist/aos.css'
import About from './About'
import Contact from './Contact'
import Service from './Service'
import Footer from './Footer'
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';
import {Link} from 'react-scroll'
import Tooltip from '@mui/material/Tooltip';
import BanarImage from '../images/BanarImage.png'
// import Navbar from './Navbar.js'
function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  const [top, settop] = useState(false);

  const handleClose = () => {
    settop(false);
  };

  const handleOpen = () => {
    settop(true);
  };
  return (
    <>
     {/* <Navbar /> */}
    <div id="Home" style={{width:"100%"}}>
      <header className='head' style={{minHeight:"100vh"}}>
        <div class="h-text">
          <h2 style={{fontWeight:"100"}}>TrackZ</h2>
          <h1 data-aos="fade-right">WEL<span style={{ color: "brown" }}>CO</span>ME</h1>
          <p data-aos="fade-left">First Platform to connect</p>
          <p data-aos="fade-right">Hawkers and Customers</p>
          <p data-aos="fade-left">directly</p>
          <h4 style={{ textDecoration: "none", listStyle: "none" }} data-aos="flip-right"><NavLink to="/" id="order">Lern More</NavLink></h4>
        </div>
        <div className="image">
          <img src={BanarImage} data-aos="fade-left" />
        </div>
      </header>
      <Link to='Navbar'>
 <Tooltip open={top} onClose={handleClose} onOpen={handleOpen} title="top">
<Box sx={{ '& > :not(style)': { m: 1 } }} style={{position:'fixed',right:'10px',bottom:'20px'}} className="tops">
      <Fab variant="extended" size="small" color="primary" aria-label="Top">
        <NavigationIcon />
      </Fab>
    </Box>
    </Tooltip>
    </Link>
    </div>
    <About/>
    <Service/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default Home