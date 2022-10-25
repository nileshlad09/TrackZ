import React, { useState } from "react";
import "./login.css";
import { BsFillTelephonePlusFill } from "react-icons/bs";
import { RiLockPasswordFill } from "react-icons/ri";
import { useNavigate, NavLink } from "react-router-dom";
import { RiCustomerService2Fill } from "react-icons/ri";
  
function CommanLogin() {



  const navigate = useNavigate();
  const [crediantial, setCrediential] = useState({});

  const onchange = (e) => {
    setCrediential({ ...crediantial, [e.target.name]: e.target.value });
  };

  const handleClick = async (e) => {
    e.preventDefault();
    if (crediantial.loginas === "customer") {
      const response = await fetch(`http://localhost:5000/api/userauth/login`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phone: crediantial.phone,
          password: crediantial.password,
        }),
      });
      const json = await response.json();
      console.log(json);
      if (json.success) {
        localStorage.setItem("trackztoken", json.authToken);
        localStorage.setItem("trackzroll", "cus");
        
        navigate("/");
      } else {
        console.log("user not found in customer");
      }
    } else if (crediantial.loginas === "serviceprovider") {
      console.log("serviceprovider");
      const response = await fetch(
        `http://localhost:5000/api/hawkerauth/login`,
        {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            phone: crediantial.phone,
            password: crediantial.password,
          }),
        }
      );
      const json = await response.json();
      console.log(json);
      if (json.success) {
        localStorage.setItem("trackztoken", json.authToken);
        localStorage.setItem("trackzroll", "sp");
        navigate("/");
      } else {
        console.log("user not found in service ");
      }
    }
  };

  return (
    <div className="mainlogin">
      <div
        style={{
          backgroundColor: "#d8d6d6"
        }}
        className="login"
      >
        <h1
          data-aos="fade-right"
          style={{ textAlign: "center" }}
          className="heading"
        >
          Login
        </h1>
        <div className="borders" data-aos="fade-left"></div>
        <div
          id="Contact"
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div>
            <form onSubmit={handleClick}>
              <div className="mb-3">
                <label
                  className="form-label"
                  style={{ display: "flex", textAlign: "center", gap: "10px" }}
                >
                  <h5>Login As</h5>
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
                  value={crediantial.loginas}
                  name="loginas"
                  required
                >
                  <option value="" style={{ fontSize: "14px" }}>
                    ---select---
                  </option>
                  <option value="serviceprovider" style={{ fontSize: "14px" }}>
                    Service Provider
                  </option>
                  <option value="customer" style={{ fontSize: "14px" }}>
                    customer
                  </option>
                </select>
              </div>
              <div className="mb-3">
                <label
                  className="form-label"
                  style={{ display: "flex", textAlign: "center", gap: "10px" }}
                >
                  <h5>Phone Number</h5>
                  <BsFillTelephonePlusFill />
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleInputEmail1"
                  style={{ height: "46px" }}
                  placeholder="Enter Your Phone"
                  name="phone"
                  value={crediantial.phone}
                  onChange={onchange}
                  required
                />
              </div>
              <div className="mb-3">
                <label
                  className="form-label"
                  style={{ display: "flex", textAlign: "center", gap: "10px" }}
                >
                  <h5>Password</h5>
                  <RiLockPasswordFill />
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  style={{ height: "46px" }}
                  placeholder="Enter Your Password"
                  name="password"
                  value={crediantial.password}
                  onChange={onchange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </form>
            <div>
              <h6 style={{ marginTop: "10px" }}>
                {" "}
                Sign Up As Service Provider<NavLink to="/Admin"> SignUp</NavLink>
              </h6>
              <h6 style={{ marginTop: "10px" }}>
                {" "}
                Sign Up As Customer<NavLink to="/SimpleUser"> SignUp</NavLink>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommanLogin;
