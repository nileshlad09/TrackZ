import React from 'react'
import './Payment.css'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

function Payment() {
    function p1(){
        document.getElementById("pay").value="₹199"    
    }
    function p2(){
         document.getElementById("pay").value="₹399"
    }

    function p3(){
        document.getElementById("pay").value="₹449"
    }

    return (
        <div className='PaymentSection'>
            <div className="container">
           <div className="months" style={{display:"flex",alignItems:"center",justifyContent:"space-around"}}>
           <Stack direction="row" spacing={1} style={{margin:"20px"}}  >
                <Chip label="1 month" onClick={p1} />
            </Stack>
            <Stack direction="row" spacing={1} style={{margin:"20px"}} >
                <Chip label="3 months" onClick={p2} />
            </Stack>
            <Stack direction="row" spacing={1} style={{margin:"20px"}} >
                <Chip label="6 months" onClick={p3} />
            </Stack>
           </div>
                <form action="">
                    <div className="inputBox">
                        <span>card number</span>
                        <input type="text" maxlength="16" class="card-number-input" />
                    </div>
                    <div className="inputBox">
                        <span>card holder</span>
                        <input type="text" className="card-holder-input"/>
                    </div>
                    <div className="inputBox">
                        <span>Payment</span>
                        <input type="text" className="card-holder-input" placeholder='₹000' id="pay" maxlength="4" disabled size="4" />
                    </div>
                    <div className="flexbox">
                        <div className="inputBox">
                            <span>expiration mm</span>
                            <select name="" id="" class="month-input">
                                <option value="month" selected disabled>month</option>
                                <option value="01">01</option>
                                <option value="02">02</option>
                                <option value="03">03</option>
                                <option value="04">04</option>
                                <option value="05">05</option>
                                <option value="06">06</option>
                                <option value="07">07</option>
                                <option value="08">08</option>
                                <option value="09">09</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                            </select>
                        </div>
                        <div className="inputBox">
                            <span>expiration yy</span>
                            <select name="" id="" class="year-input">
                                <option value="year" selected disabled>year</option>
                                <option value="2021">2021</option>
                                <option value="2022">2022</option>
                                <option value="2023">2023</option>
                                <option value="2024">2024</option>
                                <option value="2025">2025</option>
                                <option value="2026">2026</option>
                                <option value="2027">2027</option>
                                <option value="2028">2028</option>
                                <option value="2029">2029</option>
                                <option value="2030">2030</option>
                            </select>
                        </div>
                        <div className="inputBox">
                            <span>cvv</span>
                            <input type="text" maxlength="3" minLength="3" className="cvv-input" />
                        </div>
                    </div>
                    <input type="submit" value="submit" className="submit-btn" />
                </form>

            </div>
        </div>
    )
}

export default Payment