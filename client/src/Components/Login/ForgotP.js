import React, { useState } from "react";
import "../Signup/signup.css";
import { useNavigate, NavLink } from "react-router-dom";
import { useContext } from "react";
import userContext from "../../context/user/userContext";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../../fiberbase";

const ForgotP = () => {

  const [otp, setOtp] = useState("");
  const [result, setResult] = useState("");
  const [result2, setResult2] = useState("");
  const context = useContext(userContext);
  const { showAlert } = context;

  const navigate = useNavigate();
  const [crediantial, setCrediantial] = useState({
    phone: "",
    password: "",
    loginas:""
  });


const handleclick = async (e) => {
  e.preventDefault();
  if (crediantial.loginas === "customer") {
    if(result2){
    const response = await fetch(
      `http://localhost:5000/api/userauth/forgotP`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phone: crediantial.phone,
          password: crediantial.password
        }),
      }
    );
    const json = await response.json();
    if (json.success) {
      showAlert("success","Password Change Successfully")
      navigate("/commanlogin");
    }
  }
  else{
    showAlert("danger","Kindly verify mobile number")
  }
  } else if (crediantial.loginas === "serviceprovider") {
    if(result2){
      const response = await fetch(
        `http://localhost:5000/api/hawkerauth/forgotP`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            phone: crediantial.phone,
            password: crediantial.password
          }),
        }
      );
      const json = await response.json();
      if (json.success) {
        showAlert("success","Password Change Successfully")
        navigate("/commanlogin");
      }
    }
    else{
      showAlert("danger","Kindly verify mobile number")
    }

  }
};



  const onchange = (e) => {
    setCrediantial({ ...crediantial, [e.target.name]: e.target.value });
  };



  const number = `+91${crediantial.phone}`;
  const recapcha = (number) => {
    const recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {},
      auth
    );
    recaptchaVerifier.render();
    return signInWithPhoneNumber(auth, number, recaptchaVerifier);
  };

  const sendOtp = async (e) => {
    e.preventDefault();
    try {
      const res = await recapcha(number);
      setResult(res);
      showAlert("success","otp send successfully")
    } catch (error) {
      showAlert("danger","please try again")
    }
  };
  const verify = async (e) => {
    e.preventDefault();
    if (otp === "" || otp === null) return;
    try {
      const res = await result.confirm(otp);
      setResult2(res)
      // console.log(res);
      showAlert("success","otp verified successfully")
    } catch (err) {
      showAlert("danger","incorrect otp or otp expire")
    }
  };

  return (
    <div>
      <div className="signupContainer">
        <div className="container">
          <header>Forgot Password</header>

          <form onSubmit={handleclick}>
            <div className="form first">
              <div className="details personal">
                <div className="fields">
                <div className="input-field">
                <label>Select</label>
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
                  <div className="input-field">
                    <label>Mobile Number</label>
                    <div className="input-field2">
                      <input
                        type="number"
                        placeholder="Enter mobile number"
                        required
                        name="phone"
                        value={crediantial.phone}
                        onChange={onchange}
                      />
                      <button className="verify" onClick={sendOtp}>send otp</button>
                    </div>
                  </div>
                  <div className="input-field">
                    <label>Capcha</label>
                    <div className="input-field2" id="recaptcha-container" />
                  </div>
                  <div className="input-field">
                    <label>OTP</label>
                    <div className="input-field2">
                      <input
                        type="number"
                        placeholder="Enter OTP Sent"
                        required
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                      />
                      <button className="verify" onClick={verify}>verify</button>
                    </div>
                  </div>
                  <div className="input-field">
                    <label>New Password</label>
                    <div className="input-field2">
                      <input type="password" placeholder="New Password" required 
                      name="password"
                      value={crediantial.password}
                      onChange={onchange}/>
                    </div>
                  </div>  
                </div>

              </div>

              <button className="sumbit">
                <span className="btnText">Change Password</span>
                <i className="uil uil-navigator"></i>
              </button>
              <h5 className="alreadyhave">
                    Don't have account?
                <NavLink to="/commanlogin">Create account</NavLink>{" "}
              </h5>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ForgotP
