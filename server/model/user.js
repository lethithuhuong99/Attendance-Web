const mongoose = require("mongoose");

const autoIncrementModelID = require("./counterModel");

var schema = new mongoose.Schema({
  id: {
    type: String,
    require: true,
  },
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

schema.pre("save", function (next) {
  if (!this.isNew) {
    next();
    return;
  }

  autoIncrementModelID("activities", this, next);
});

const Employeedb = mongoose.model("employeedb", schema);

module.exports = Employeedb;
