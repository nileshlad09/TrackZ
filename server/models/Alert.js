const mongoose = require('mongoose')
const {Schema} = mongoose

const AlertSchema = new Schema({
    alertTo:{
        type:String
    },
    alertFrom:{
        type:String
    },
    
},
{ timestamps: true })

const alert = mongoose.model('alert', AlertSchema);
module.exports = alert