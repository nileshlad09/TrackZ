import React, { useState } from "react";
import "./login.css";
import { useNavigate, NavLink } from "react-router-dom";
import { useContext } from "react";
import userContext from "../../context/user/userContext";


function CommanLogin() {
  const context = useContext(userContext);
  const { showAlert } = context;
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
      // console.log(json);
      if (json.success) {
        localStorage.setItem("trackztoken", json.authToken);
        localStorage.setItem("trackzroll", "cus");
        showAlert("success","login successfully")
        navigate("/");
      } else {
        // console.log("user not found in customer");
        showAlert("danger","invalid crediantial")
      }
    } else if (crediantial.loginas === "serviceprovider") {
      // console.log("serviceprovider");
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
      // console.log(json);
      if (json.success) {
        localStorage.setItem("trackztoken", json.authToken);
        localStorage.setItem("trackzroll", "sp");
        showAlert("success","login successfully")
        navigate("/");
      } else {
        // console.log("user not found in service ");
        showAlert("danger","invalid crediantial")
      }
    }
  };

  return (
    <>
      <div className="wrapper">
        <div className="modalForm">
          <h2>Login</h2>
          <form action="" onSubmit={handleClick} className="form user userForm">
            <div className="inputGroup">
              <select
                className="roll"
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
            <div className="inputGroup">
              <input
                type="text"
                placeholder="Enter Phone no."
                name="phone"
                value={crediantial.phone}
                onChange={onchange}
              />
            </div>
            <div className="inputGroup">
              <input
                type="password"
                placeholder="Enter Password"
                name="password"
                value={crediantial.password}
                onChange={onchange}
              />
            </div>
            <button type="submit" className="submitBtn">
              Login
            </button>
            <div className="member">
              <h5>Not a Member?</h5>
              <div>
                <NavLink to="/Admin">Signup as Service Provider</NavLink>
                <NavLink to="/SimpleUser">Signup as Customer </NavLink>
                <NavLink to="/forgotpassword" style={{color:'red'}}>Forgot Password </NavLink>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default CommanLogin;
