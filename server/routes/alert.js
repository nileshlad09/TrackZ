const router = require("express").Router();
const Alert = require("../models/Alert");
const fetchuser = require('../middlewre/fetchuser')

//send a alert
router.post("/alert/:id", async (req, res) => {
  try {
    const alert = await Alert.findOne({
      alertTo: req.params.id,
      alertFrom: req.body.userId,
    });
    if (alert) {
      return res.json("alert send already");
    }
    let alert2 = await Alert.create({
      alertTo: req.params.id,
      alertFrom: req.body.userId,
    });
    success = true;
    res.json({ success, alert2 });
  } catch (error) {
    success = false;
    res.json({ success, error });
  }
});


 //get a alert for SP
router.post('/getalert/:userId',async (req,res)=>{
  try { 
    let alert = await Alert.find({alertTo:req.params.userId})
    res.send(alert)
  } catch (error) {
    res.json({error})
  }
})

//get a alert for CUS
router.post('/getalert2/:userId',async (req,res)=>{
  try { 
    let alert = await Alert.find({alertFrom:req.params.userId})
    res.send(alert)
  } catch (error) {
    res.json({error})
  }
})

//delete alert 
router.delete('/deletealert/:id', async (req,res)=>{
  try {
     let note = await Alert.findById(req.params.id)
     if(!note){
        res.status(404).send("not found")
     }
     note = await Alert.findByIdAndDelete(req.params.id); 
     res.send(note)
  } catch (error) {
     console.error(error.message);
     res.status(500).send("some Error occured");      
  }
})


module.exports = router;
