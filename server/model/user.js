const mongoose = require("mongoose");

var schema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  gender: {
    type: String,
    require: true,
  },
  phoneNumber: {
    type: Number,
    require: true,
    unique: true,
  },
  address: {
    type: String,
    require: true,
  },
  dateOfBirth: {
    type: String,
    require: true,
  },
  position: {
    type: String,
    require: true,
  },
});

const Employeedb = mongoose.model("employeedb", schema);

module.exports = Employeedb;
