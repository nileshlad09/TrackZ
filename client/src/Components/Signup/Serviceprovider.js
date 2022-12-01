import React, { useState } from "react";
import "./signup.css";
import { NavLink, useNavigate } from "react-router-dom";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../../fiberbase";
import { useContext } from "react";
import userContext from "../../context/user/userContext";

function Admin() {
  const context = useContext(userContext);
  const { showAlert } = context;


  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [result, setResult] = useState("");
  const [result2, setResult2] = useState("");
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
    if(result2){
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
            issuedDate: crediantial.issuedDate,
          }),
        }
      );
      const json = await response.json();
      // console.log(json);
      if (json.success) {
        localStorage.setItem("trackztoken", json.authToken);
        localStorage.setItem("trackzroll", "sp");
        showAlert("success","account created successfully")
        navigate("/");
        // console.log("Account created succssfully");
      }
    }
    else{
      showAlert("danger","Kindly verify mobile number")
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
    <>
      <div className="signupContainer">
        <div className="container">
          <header>Service Provider</header>

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
                        value={crediantial.name}
                        name="name"
                        onChange={onchange}
                      />
                    </div>
                  </div>
                  <div className="input-field">
                    <label>Password</label>
                    <div className="input-field2">
                      <input
                        type="password"
                        placeholder="Enter Password"
                        required
                        value={crediantial.password}
                        name="password"
                        onChange={onchange}
                      />
                    </div>
                  </div>

                  <div className="input-field">
                    <label>Mobile Number</label>
                    <div className="input-field2">
                      <input
                        type="tel"
                        placeholder="Enter mobile number"
                        required
                        value={crediantial.phone}
                        name="phone"
                        onChange={onchange}
                      />
                      <button className="verify" onClick={sendOtp}>
                        send otp
                      </button>
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
                      <button className="verify" onClick={verify}>
                        verify
                      </button>
                    </div>
                  </div>

                  <div className="input-field">
                    <label>Address</label>
                    <div className="input-field2">
                      <input
                        type="text"
                        placeholder="Enter address"
                        required
                        value={crediantial.address}
                        name="address"
                        onChange={onchange}
                      />
                    </div>
                  </div>
                  <div className="input-field">
                    <label>city</label>
                    <div className="input-field2">
                      <input
                        type="text"
                        placeholder="city"
                        required
                        value={crediantial.city}
                        name="city"
                        onChange={onchange}
                      />
                    </div>
                  </div>
                  <div className="input-field">
                    <label>Pincode</label>
                    <div className="input-field2">
                      <input
                        type="number"
                        placeholder="Enter Pin code"
                        required
                        value={crediantial.pinCode}
                        name="pinCode"
                        onChange={onchange}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="details ID">
                <span className="title">Identity Details</span>

                <div className="fields">
                <div className="input-field">
                    <label>Type of Service</label>
                    <select
                      required
                      onChange={onchange}
                      value={crediantial.typeOfService}
                      name="typeOfService"
                    >
                      <option disabled selected>
                        --select--
                      </option>
                      <option value="ScrapCollector">Scrap Collector</option>
                      <option value="VegetableVendor">Vegetable Vendor</option>
                    </select>
                  </div>

                  <div className="input-field">
                    <label>PAN Number</label>
                    <input
                      type="tel"
                      placeholder="Enter PAN number"
                      required
                      value={crediantial.pancardNumber}
                      name="pancardNumber"
                      onChange={onchange}
                    />
                  </div>

                  

                  <div className="input-field">
                    <label>Issued Date</label>
                    <input
                      type="date"
                      placeholder="Enter Issued Date"
                      required
                      value={crediantial.issuedDate}
                      name="issuedDate"
                      onChange={onchange}
                    />
                  </div>

                  <button type="submit" className="submit">
                    <span className="btnText">SIgnup</span>
                    <i className="uil uil-navigator"></i>
                  </button>
                  <h5 className="alreadyhave">
                    Already have account?{" "}
                    <NavLink to="/commanlogin">Login</NavLink>{" "}
                  </h5>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>

   
  );
}

export default Admin;
