import React, { useState } from "react";
import "./Admin.css";
import { BsPersonFill } from "react-icons/bs";
import { BsFillTelephonePlusFill } from "react-icons/bs";
import { RiLockPasswordFill } from "react-icons/ri";
import { GiModernCity } from "react-icons/gi";
import { ImAddressBook } from "react-icons/im";
import { BiMapPin } from "react-icons/bi";
import { RiCustomerService2Fill } from "react-icons/ri";
import { AiFillIdcard } from "react-icons/ai";
import { BsFillCalendar2DateFill } from "react-icons/bs";
import { NavLink,useNavigate } from "react-router-dom";
function Admin() {
  const navigate = useNavigate();
  const [crediantial, setCrediantial] = useState({
    name: "",
    phone: "",
    password: "",
    address: "",
    city: "",
    pinCode: "",
    typeOfService: "",
    pancardNumber: "",
    issuedDate: "",
  });
  const handleclick = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `http://localhost:5000/api/hawkerauth/createuser`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: crediantial.name,
          phone: crediantial.phone,
          password: crediantial.password,
          address: crediantial.address,
          city: crediantial.city,
          pinCode: crediantial.pinCode,
          typeOfService: crediantial.typeOfService,
          pancardNumber: crediantial.pancardNumber,
          issuedDate: crediantial.issuedDate
        }),
      }
    );
    const json = await response.json();
    console.log(json);
    if (json.success) {
      localStorage.setItem("trackztoken", json.authToken);
      navigate("/");    
      console.log("Account created succssfully");
    }
  };

  const onchange = (e) => {
    setCrediantial({ ...crediantial, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="main" style={{ marginTop: "30px" }}>
        <div className="container">
          <header>Service Provider</header>
          <form onSubmit={handleclick}>
            <div className="form first">
              <div className="details personal">
                <span className="title">Personal Details</span>
                <div className="fields">
                  <div className="mb-3">
                    <label
                      className="form-label"
                      style={{
                        display: "flex",
                        textAlign: "center",
                        gap: "10px",
                      }}
                    >
                      <h5>Name</h5>
                      <BsPersonFill />
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      aria-describedby="emailHelp"
                      style={{ height: "46px" }}
                      placeholder="Enter Your name"
                      onChange={onchange}
                      value={crediantial.name}
                      name="name"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label
                      className="form-label"
                      style={{
                        display: "flex",
                        textAlign: "center",
                        gap: "10px",
                      }}
                    >
                      <h5>Phone</h5>
                      <BsFillTelephonePlusFill />
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      aria-describedby="emailHelp"
                      style={{ height: "46px" }}
                      placeholder="Enter Your Phone"
                      onChange={onchange}
                      value={crediantial.phone}
                      name="phone"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label
                      className="form-label"
                      style={{
                        display: "flex",
                        textAlign: "center",
                        gap: "10px",
                      }}
                    >
                      <h5>Password</h5>
                      <RiLockPasswordFill />
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      aria-describedby="emailHelp"
                      style={{ height: "46px" }}
                      placeholder="Enter Your Password"
                      onChange={onchange}
                      value={crediantial.password}
                      name="password"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label
                      className="form-label"
                      style={{
                        display: "flex",
                        textAlign: "center",
                        gap: "10px",
                      }}
                    >
                      <h5>City</h5>
                      <GiModernCity />
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      aria-describedby="emailHelp"
                      style={{ height: "46px" }}
                      placeholder="Enter Your City"
                      onChange={onchange}
                      value={crediantial.city}
                      name="city"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label
                      className="form-label"
                      style={{
                        display: "flex",
                        textAlign: "center",
                        gap: "10px",
                      }}
                    >
                      <h5>Address</h5>
                      <ImAddressBook />
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      aria-describedby="emailHelp"
                      style={{ height: "46px" }}
                      placeholder="Enter Your Address"
                      onChange={onchange}
                      value={crediantial.address}
                      name="address"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label
                      className="form-label"
                      style={{
                        display: "flex",
                        textAlign: "center",
                        gap: "10px",
                      }}
                    >
                      <h5>Pin Code</h5>
                      <BiMapPin />
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      style={{ height: "46px" }}
                      placeholder="Enter Your Pin Code"
                      onChange={onchange}
                      value={crediantial.pinCode}
                      name="pinCode"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="details ID">
                <span className="title">Business Details</span>
                <div className="fields">
                  <div className="mb-3">
                    <label
                      htmlFor=""
                      style={{
                        display: "flex",
                        textAlign: "center",
                        gap: "10px",
                      }}
                    >
                      <h5>Type Of Service</h5>
                      <RiCustomerService2Fill />
                    </label>
                    <select
                      id="service"
                      style={{
                        padding: "15px",
                        border: "0px",
                        outline: "none",
                        width: "250px",
                        height: "50px",
                        borderRadius: "3.5px",
                      }}
                      onChange={onchange}
                      value={crediantial.typeOfService}
                      name="typeOfService"
                    >
                      <option value="" style={{ fontSize: "14px" }}>
                        select
                      </option>
                      <option value="raddiwala" style={{ fontSize: "14px" }}>
                        Raddiwala
                      </option>
                      <option value="VegetableVendor" style={{ fontSize: "14px" }}>
                       Vegetable Vendor
                      </option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <label
                      className="form-label"
                      style={{
                        display: "flex",
                        textAlign: "center",
                        gap: "10px",
                      }}
                    >
                      <h5>Pan Card Number</h5>
                      <AiFillIdcard />
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      style={{ height: "46px" }}
                      placeholder="Enter Your Pan Card Number"
                      onChange={onchange}
                      value={crediantial.pancardNumber}
                      name="pancardNumber"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label
                      className="form-label"
                      style={{
                        display: "flex",
                        textAlign: "center",
                        gap: "10px",
                      }}
                    >
                      <h5>Issued Date</h5>
                      <BsFillCalendar2DateFill />
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      aria-describedby="emailHelp"
                      style={{ height: "46px" }}
                      onChange={onchange}
                      value={crediantial.issuedDate}
                      name="issuedDate"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="btn_box">
                <button type="submit" className="btn">Sign Up</button>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                  flexWrap: "wrap",
                }}
              >
                <h6 style={{ marginTop: "10px" }}>
                  {" "}
                  Sign Up As Customer<NavLink to="/SimpleUser">SignUp</NavLink>
                </h6>
                <h6 style={{ marginTop: "10px" }}>
                  {" "}
                  If You Have Any Account
                  <NavLink to="/CommanLogin">Login</NavLink>
                </h6>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Admin;
