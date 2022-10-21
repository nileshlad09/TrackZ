const express = require("express");
const Hawker = require("../models/Hawker");
const router = express.Router();

router.post('/allhawkers/:typeOfService', async(req,res)=>{

    try {
      let hawkers = await Hawker.find({typeOfService:req.params.typeOfService}).select("name city");
      res.json(hawkers)
      console.log(hawkers);
    } catch (error) {
      success = false
      res.json({success,error})
    }
  })
  
  
module.exports = router;
  