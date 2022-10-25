const mongoose = require("mongoose");
const { Schema } = mongoose;

const HawkerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  pinCode: {
    type: Number,
    required: true,
  },
  typeOfService: {
    type: String,
    required: true,
  },
  pancardNumber: {
    type: Number,
    required: true,
  },
  issuedDate: {
    type: String,
    required: true,
  },
  alert: {
    type: Array,
    default: [],
  },
});

const Hawker = mongoose.model("hawker", HawkerSchema);
module.exports = Hawker;
