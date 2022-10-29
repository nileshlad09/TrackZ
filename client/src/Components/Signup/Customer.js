import React, { useState } from "react";
import "./signup.css";
import { useNavigate, NavLink } from "react-router-dom";
import { useContext } from "react";
import userContext from "../../context/user/userContext";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../../fiberbase";

function SimpleUser() {
  const [otp, setOtp] = useState("");
  const [result, setResult] = useState("");
  const [result2, setResult2] = useState("");
  const context = useContext(userContext);
  const { showAlert } = context;

  const navigate = useNavigate();
  const [crediantial, setCrediantial] = useState({
    name: "",
    phone: "",
    password: "",
    address: "",
    city: "",
    pinCode: "",
  });
  const handleclick = async (e) => {
    e.preventDefault();
    if(result2){
    const response = await fetch(
      `http://localhost:5000/api/userauth/createuser`,
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
        }),
      }
    );
    const json = await response.json();
    console.log(json);
    console.log(crediantial);
    if (json.success) {
      localStorage.setItem("trackztoken", json.authToken);
      localStorage.setItem("trackzroll", "cus");
      showAlert("success","account created successfully")
      console.log("Account created succssfully");
      navigate("/");
    }
  }
  else{
    showAlert("danger","Kindly verify mobile number")
  }
}

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
      console.log(res);
      showAlert("success","otp verified successfully")
    } catch (err) {
      showAlert("danger","incorrect otp or otp expire")
    }
  };

  return (
    <>
      <div className="signupContainer">
        <div className="container">
          <header>Customer</header>

          <form onSubmit={handleclick}>
            <div className="form first">
              <div className="details personal">
                <span className="title">Personal Details</span>

                <div className="fields">
                  <div className="input-field">
                    <label>Full Name</label>
                    <div className="input-field2">
                      <input
                        type="text"
                        placeholder="Enter your name"
                        required
                        name="name"
                        value={crediantial.name}
                        onChange={onchange}
                      />
                    </div>
                  </div>
                  <div className="input-field">
                    <label>Password</label>
                    <div className="input-field2">
                      <input type="password" placeholder="Password" required 
                      name="password"
                      value={crediantial.password}
                      onChange={onchange}/>
                    </div>
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
                    <label>Address</label>
                    <div className="input-field2">
                      <input type="text" placeholder="Enter address" required 
                      name="address"
                      value={crediantial.address}
                      onChange={onchange}/>
                    </div>
                  </div>
                  <div className="input-field">
                    <label>City</label>
                    <div className="input-field2">
                      <input type="text" placeholder="Enter city name" required
                      name="city"
                      value={crediantial.city}
                      onChange={onchange} />
                    </div>
                  </div>
                  <div className="input-field">
                    <label>Pincode</label>
                    <div className="input-field2">
                      <input
                        type="number"
                        placeholder="Enter Issued Date"
                        required
                        name="pinCode"
                        value={crediantial.pinCode}
                        onChange={onchange}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <button className="sumbit">
                <span className="btnText">Sign Up</span>
                <i className="uil uil-navigator"></i>
              </button>
              <h5 className="alreadyhave">
                    Already have account?{" "}
                    <NavLink to="/commanlogin">Login</NavLink>{" "}
                  </h5>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SimpleUser;
