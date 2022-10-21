const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const mongoURI ='mongodb://localhost:27017/trackz'

const connectToMongo = ()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("MongoDB connect successfully");
    })
}

module.exports = connectToMongo;