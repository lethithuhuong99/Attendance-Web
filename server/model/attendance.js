const mongoose = require("mongoose");

  // id: { type: Number, unique: true, min: 1 },
var schema = new mongoose.Schema({
  date: {
    type: String,
    require: true,
  },
  userId: {
    type: String,
    require: true,
  },
  // name: {
  //   type: String,
  //   require: true,
  // },
  mask: {
    type: String,
    require: true,
  },
  checkIn: {
    type: String,
    require: true,
  },
  checkOut: {
    type: String,
    require: true,
  },
});



const Attendancedb = mongoose.model("attendancedb", schema);

module.exports = Attendancedb;
