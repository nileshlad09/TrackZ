const express = require('express');
const cors = require("cors")
const connectToMongo = require('./db');
const dotenv = require('dotenv');

dotenv.config();
connectToMongo();
const app = express()
app.use(cors())
app.use(express.json())
const PORT= 5000

app.use('/api/userauth',require('./routes/userauth'))
app.use('/api/hawkerauth',require('./routes/hawkerauth'))
app.use('/api/hawkers',require('./routes/hawkers'))
    

app.listen(PORT,()=>{
    console.log("Server running on PORT:",PORT);
})
