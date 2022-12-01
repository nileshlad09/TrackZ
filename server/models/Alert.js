const mongoose = require('mongoose')
const {Schema} = mongoose

const AlertSchema = new Schema({
    alertTo:{
        type:String,
        required: true
    },
    alertFrom:{
        type:String,
        required: true
    },
    status:{
        type:String,
        required: true
    }
    
},
{ timestamps: true })

const alert = mongoose.model('alert', AlertSchema);
module.exports = alert