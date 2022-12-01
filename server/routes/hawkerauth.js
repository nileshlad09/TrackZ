const express = require("express");
const { body, validationResult } = require("express-validator");
const Hawker = require("../models/Hawker");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRET = 'nilesh09';
const fetchuser = require('../middlewre/fetchuser')

// creating a new user
router.post(
  "/createuser",
  [
    body("name","name should contain atleast 3 char").isLength({ min: 3 }),
    body("phone","invalid phone number").isLength({ min: 10, max: 10 }),
    body("pinCode","pin code should be 6 digit").isLength({ min: 6, max: 6 }),
    body("password").isLength({min:8,max:15})
  ],
  async (req, res) => {
    //validation of data
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array() });
    }
    try {
    // check whether user with this Phone Number exits already or not
      let user = await Hawker.findOne({ phone: req.body.phone });
      if (user) {
        return res
          .status(400)
          .json({ error: "User with this Phone Number already exists" });
      }

      //password hashing for security
      const salt =await bcrypt.genSalt(10);
      secPass = await bcrypt.hash(req.body.password,salt)

      // create a new user
      user = await Hawker.create({
        name: req.body.name,
        phone: req.body.phone,
        password: secPass,
        address: req.body.address,
        city: req.body.city,
        pinCode: req.body.pinCode,
        typeOfService:req.body.typeOfService,
        pancardNumber:req.body.pancardNumber,
        issuedDate:req.body.issuedDate    
      });
      
     const data ={
        user:{
            id:user.id
        }
     }
     success= true
     const authToken = jwt.sign(data,JWT_SECRET)
      res.json({success, authToken });
    } catch (error) {
      success = false;
      res.json({ success, error });
    }
  }
);

//login
router.post('/login',[
  body("phone","invalid phone number").isLength({ min: 10, max: 10 }),
  body('password').isLength({min:8,max:15})
] ,async(req,res)=>{
  const error = validationResult(req)
  if(!error.isEmpty()){
    return res.status(400).json({error:error.array()})
  }
  try {
    let user = await Hawker.findOne({phone:req.body.phone})
    if(!user){
      return res.status(400).json({error:"invalid creditional"})
    }
    let passwordCompare = await bcrypt.compare(req.body.password,user.password);
    if(!passwordCompare){
        return res.status(400).json({error:"invalid creditional"})
    }
    const data ={
      user:{
          id:user.id
      }
   }
   console.log(data);
   success= true
   const authToken = jwt.sign(data,JWT_SECRET)
   res.json({success, authToken });
  } catch (error) {
    success = false
    res.json({success,error})
  }
})

router.post("/forgotP", 
[
  body("phone","invalid phone number").isLength({ min: 10, max: 10 }),
  body('password').isLength({min:8,max:15})
],
async (req,res)=>{
  const error = validationResult(req)
  if(!error.isEmpty()){
    return res.status(400).json({error:error.array()})
  }
  try {
   let user = await Hawker.findOne({phone:req.body.phone})
   if(!user){
     res.status(404).send("not found")
   }
   user = await Hawker.findOne({phone: req.body.phone})

   const salt =await bcrypt.genSalt(10);
   secPass = await bcrypt.hash(req.body.password,salt)
    await Hawker.updateOne({password:secPass})
    success= true
   res.json({success});
  } catch (error) {
   res.json({ error });
  }
})




//get specific serviceprovider
router.post('/getsp',fetchuser, async(req,res)=>{
  try {
   let userID = req.user.id;
    const user = await Hawker.findById(userID).select("-password -__v");
    res.send(user);
  } catch (error) {
    res.status(500).send("internal server Error")
  }
})

//get user by id
router.post('/getsp2/:id', async(req,res)=>{
  try {
    const user =await Hawker.findById(req.params.id).select("-password -__v");
    res.send(user);
  } catch (error) {
    res.status(500).send(error)
  }
})

module.exports = router;
