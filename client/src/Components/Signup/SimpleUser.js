import React,{useState}  from 'react'
import './SimpleUser.css'
import { BsPersonFill } from 'react-icons/bs'
import { BsFillTelephonePlusFill } from 'react-icons/bs'
import { RiLockPasswordFill } from 'react-icons/ri'
import { GiModernCity } from 'react-icons/gi'
import { ImAddressBook } from 'react-icons/im'
import { BiMapPin } from 'react-icons/bi'
import { useNavigate,NavLink } from 'react-router-dom'

function SimpleUser() {
    const navigate = useNavigate();
    const [crediantial, setCrediantial] = useState({name:"",phone:"",password:"",address:"",city:"",pinCode:""});
    const handleclick = async (e)=>{
      e.preventDefault();
      const response = await fetch(`http://localhost:5000/api/userauth/createuser`, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name:crediantial.name,phone:crediantial.phone,password:crediantial.password,address:crediantial.address,city:crediantial.city,pinCode:crediantial.pinCode})
    });
    const json = await response.json()
    console.log(json);
    console.log(crediantial);
    if(json.success){
      localStorage.setItem('trackztoken', json.authToken); 
      console.log("Account created succssfully");        
      navigate("/");
    }
  }
  
  const onchange=(e)=>{
    setCrediantial({ ...crediantial, [e.target.name]: e.target.value });
  }
  

    return (

        <div className='main' style={{ marginTop: "30px" }}>
            <div className="container">
                <header>Customer</header>

                <form  onSubmit={handleclick}>
                    <div className="form first">
                        <div className="details personal">
                            <span className="title">Personal Details</span>
                            <div className="fields">

                                <div className="mb-3">
                                    <label  className="form-label" style={{ display: "flex", textAlign: "center", gap: "10px" }} ><h5>Name</h5><BsPersonFill /></label>
                                    <input type="text" className="form-control"  style={{ height: "46px" }} placeholder="Enter Your name" onChange={onchange}
                                   value={crediantial.name} 
                                   name="name" 
                                    required />
                                </div>

                                <div className="mb-3">
                                    <label  className="form-label" style={{ display: "flex", textAlign: "center", gap: "10px" }} ><h5>Phone</h5><BsFillTelephonePlusFill /></label>
                                    <input type="text" className="form-control"  style={{ height: "46px" }} placeholder="Enter Your Phone" 
                                    onChange={onchange}
                                    value={crediantial.phone}
                                    name="phone" 
                                    required />
                
                                </div> 

                                <div className="mb-3">
                                    <label  className="form-label" style={{ display: "flex", textAlign: "center", gap: "10px" }} ><h5>Password</h5><RiLockPasswordFill /></label>
                                    <input type="password" className="form-control"  style={{ height: "46px" }} placeholder="Enter Your Password" 
                                    onChange={onchange}
                                    value={crediantial.password}
                                    name="password" 
                                    required />
                
                                </div> 

                                <div className="mb-3">
                                    <label  className="form-label" style={{ display: "flex", textAlign: "center", gap: "10px" }} ><h5>City</h5><GiModernCity /></label>
                                    <input type="text" className="form-control"  style={{ height: "46px" }} placeholder="Enter Your city" 
                                    onChange={onchange}
                                    value={crediantial.city}
                                    name="city" 
                                    required />
                
                                </div> 

                                <div className="mb-3">
                                    <label  className="form-label" style={{ display: "flex", textAlign: "center", gap: "10px" }} ><h5>Address</h5><ImAddressBook /></label>
                                    <input type="text" className="form-control"  style={{ height: "46px" }} placeholder="Enter Your Address"
                                    onChange={onchange}
                                    value={crediantial.address}
                                    name="address" 
                                     required />
                
                                </div> 

                                <div className="mb-3">
                                    <label  className="form-label" style={{ display: "flex", textAlign: "center", gap: "10px" }} ><h5>Pin Code</h5><BiMapPin /></label>
                                    <input type="number" className="form-control"  style={{ height: "46px" }} placeholder="Enter Your Pin Code"
                                    onChange={onchange}
                                    name="pinCode" 
                                    value={crediantial.pinCode}
                                    required />
                
                                </div> 

                            </div>
                        </div>

                        <div className='btn_box'>
                            <button className="btn">Sign Up</button>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-around", flexWrap: "wrap" }}>
                            <h6 style={{ marginTop: "10px" }}> Sign Up As Service Provider<NavLink to='/Admin'>SignUp</NavLink></h6>
                            <h6 style={{ marginTop: "10px" }}> If You Have Any Account<NavLink to='/CommanLogin'>Login</NavLink></h6>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default SimpleUser