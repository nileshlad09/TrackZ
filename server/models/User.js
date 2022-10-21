const mongoose = require('mongoose')
const {Schema} = mongoose

const UserSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    pinCode:{
        type:Number,
        required:true
    }
})

const User = mongoose.model('user',UserSchema);
module.exports = User