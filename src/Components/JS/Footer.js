import React,{useEffect} from 'react'
import '../CSS/Footer.css'
import {Link} from 'react-router-dom'
import {FcGoogle} from "react-icons/fc"
import {BsFacebook} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'
import {BsYoutube} from 'react-icons/bs'
import AOS from 'aos'
import 'aos/dist/aos.css'
function Footer() {

    useEffect(() => {
        AOS.init({ duration: 1000 })
      }, [])
  return (
    <footer className="footer">
    <div className="containerss">
      <div className="row">
        <div className="footer-col">
          <h4 data-aos="flip-left">company</h4>
          <ul>
            <li data-aos="fade-right"><Link to="/">about us</Link></li>
            <li data-aos="fade-left"><Link to="/">our services</Link></li>
            <li data-aos="fade-right"><Link to="/">privacy policy</Link></li>
            <li data-aos="fade-left"><Link to="/">affiliate program</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4 data-aos="flip-left">get help</h4>
          <ul>
            <li  data-aos="fade-right"><Link to="/">FAQ</Link></li>
            <li  data-aos="fade-left"><Link to="/">shipping</Link></li>
            <li  data-aos="fade-right"><Link to="/">returns</Link></li>
            <li  data-aos="fade-left"><Link to="/">order status</Link></li>
            <li  data-aos="fade-right"><Link to="/">payment options</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4 data-aos="flip-left">follow us</h4>
          <div class="social-links">
            <Link to="/"><i className="fab fa-facebook-f"  data-aos="fade-right"><FcGoogle/></i></Link>
            <Link to="/"><i className="fab fa-twitter"  data-aos="fade-left"><BsFacebook/></i></Link>
            <Link to="/"><i className="fab fa-instagram"  data-aos="fade-right"><AiFillInstagram/></i></Link>
            <Link to="/"><i className="fab fa-linkedin-in"  data-aos="fade-left"><BsYoutube/></i></Link>
          </div>
        </div>
      </div>
    </div>
 </footer>

  )
}

export default Footer