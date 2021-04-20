const mongoose = require("mongoose");

const autoIncrementModelID = require("./counterModel");

var schema = new mongoose.Schema({
  id: { type: Number, unique: true, min: 1 },
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

schema.pre("save", function (next) {
  if (!this.isNew) {
    next();
    return;
  }

  autoIncrementModelID("activities", this, next);
});

const Attendancedb = mongoose.model("attendancedb", schema);

module.exports = Attendancedb;
