import React  from 'react'
import './Admin.css'
import { BsPersonFill } from 'react-icons/bs'
import { BsFillTelephonePlusFill } from 'react-icons/bs'
import { RiLockPasswordFill } from 'react-icons/ri'
import { GiModernCity } from 'react-icons/gi'
import { ImAddressBook } from 'react-icons/im'
import { BiMapPin } from 'react-icons/bi'
import { RiCustomerService2Fill } from 'react-icons/ri'
import { AiFillIdcard } from 'react-icons/ai'
import { BsFillCalendar2DateFill } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
function Admin() {


    return (
        <>
            <div className='main' style={{ marginTop: "30px" }}>
                <div className="container">
                    <header>Service Provider</header>
                    <form action="">
                        <div className="form first">
                            <div className="details personal">
                                <span className="title">Personal Details</span>
                                <div className="fields">

                                    <div className="mb-3">
                                        <label for="exampleInputEmail1" className="form-label" style={{ display: "flex", textAlign: "center", gap: "10px" }} ><h5>Name</h5><BsPersonFill /></label>
                                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style={{ height: "46px" }} placeholder="Enter Your name" required />
                                        <div id="emailHelp" className="form-text">We'll never share your Phone with anyone else.</div>
                                    </div>

                                    <div className="mb-3">
                                        <label for="exampleInputEmail1" className="form-label" style={{ display: "flex", textAlign: "center", gap: "10px" }} ><h5>Phone</h5><BsFillTelephonePlusFill /></label>
                                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style={{ height: "46px" }} placeholder="Enter Your Phone" required />
                                        <div id="emailHelp" className="form-text">We'll never share your Phone with anyone else.</div>
                                    </div>

                                    <div className="mb-3">
                                        <label for="exampleInputEmail1" className="form-label" style={{ display: "flex", textAlign: "center", gap: "10px" }} ><h5>Password</h5><RiLockPasswordFill /></label>
                                        <input type="password" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style={{ height: "46px" }} placeholder="Enter Your Password" required />
                                        <div id="emailHelp" className="form-text">We'll never share your Phone with anyone else.</div>
                                    </div>

                                    <div className="mb-3">
                                        <label for="exampleInputEmail1" className="form-label" style={{ display: "flex", textAlign: "center", gap: "10px" }} ><h5>City</h5><GiModernCity /></label>
                                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style={{ height: "46px" }} placeholder="Enter Your City" required />
                                        <div id="emailHelp" className="form-text">We'll never share your Phone with anyone else.</div>
                                    </div>

                                    <div className="mb-3">
                                        <label for="exampleInputEmail1" className="form-label" style={{ display: "flex", textAlign: "center", gap: "10px" }} ><h5>Address</h5><ImAddressBook /></label>
                                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style={{ height: "46px" }} placeholder="Enter Your Address" required />
                                        <div id="emailHelp" className="form-text">We'll never share your Phone with anyone else.</div>
                                    </div>

                                    <div className="mb-3">
                                        <label for="exampleInputEmail1" className="form-label" style={{ display: "flex", textAlign: "center", gap: "10px" }} ><h5>Pin Code</h5><BiMapPin /></label>
                                        <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style={{ height: "46px" }} placeholder="Enter Your Pin Code" required />
                                        <div id="emailHelp" className="form-text">We'll never share your Phone with anyone else.</div>
                                    </div>

                                </div>
                            </div>


                            <div className="details ID">
                                <span className="title">Business Details</span>
                                <div className="fields">

                                    <div  className="mb-3">
                                        <label for="" style={{ display: "flex", textAlign: "center", gap: "10px" }} ><h5>Type Of Service</h5><RiCustomerService2Fill /></label>
                                        <select id="country" name="country" style={{ padding: "15px", border: "0px", outline: "none", width: "250px", height: "50px", borderRadius: "3.5px" }}>
                                            <option value="australia" style={{ fontSize: "14px" }}>Raddiwala</option>
                                            <option value="canada">Bhajiwala</option>
                                            <option value="usa">Other</option>
                                        </select>
                                        <div id="emailHelp" className="form-text">We'll never share your Phone with anyone else.</div>
                                    </div>

                                    <div className="mb-3">
                                        <label for="exampleInputEmail1" className="form-label" style={{ display: "flex", textAlign: "center", gap: "10px" }} ><h5>Pan Card Number</h5><AiFillIdcard /></label>
                                        <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style={{ height: "46px" }} placeholder="Enter Your Pin Code" required />
                                        <div id="emailHelp" className="form-text">We'll never share your Phone with anyone else.</div>
                                    </div>

                                    <div className="mb-3">
                                        <label for="exampleInputEmail1" className="form-label" style={{ display: "flex", textAlign: "center", gap: "10px" }} ><h5>Issued Date</h5><BsFillCalendar2DateFill/></label>
                                        <input type="date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style={{ height: "46px" }} placeholder="Enter Your Pin Code" required />
                                        <div id="emailHelp" className="form-text">We'll never share your Phone with anyone else.</div>
                                    </div>

    
                                </div>
                            </div>
                            <div className='btn_box'>
                                <NavLink to="/"><button className="btn">Sign Up</button></NavLink>
                            </div>

                            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-around", flexWrap: "wrap" }}>
                                <h6 style={{ marginTop: "10px" }}> Sign Up As Customer<NavLink to='/SimpleUser'>SignUp</NavLink></h6>
                                <h6 style={{ marginTop: "10px" }}> If You Have Any Account<NavLink to='/CommanLogin'>Login</NavLink></h6>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Admin