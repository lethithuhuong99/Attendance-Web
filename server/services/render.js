const axios = require("axios");

exports.homeRoutes = (req, res) => {
  // make a get request to /users
  axios
    .get("http://localhost:3000/users")
    .then(function (response) {
      console.log(response.data);
      res.render("index", { users: response.data });
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.add_user = (req, res) => {
  res.render("add_user");
};

exports.update_user = (req, res) => {
  axios
    .get("http://localhost:3000/users", { params: { id: req.query.id } })
    .then(function (userdata) {
      res.render("update_user", { user: userdata.data });
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.attendanceRoutes = (req, res) => {
  // make a get request to /attendances
  axios
    .get("http://localhost:3000/attendances")
    .then(function (response) {
      console.log(response.data);
      res.render("attendance", { listAttendance: response.data });
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.add_attendance = (req, res) => {
  res.render("add_attendance");
};

exports.update_attendance = (req, res) => {
  axios
    .get("http://localhost:3000/attendances", { params: { id: req.query.id } })
    .then(function (data) {
      res.render("update_attendance", { attendance: attendancedata.data });
    })
    .catch((err) => {
      res.send(err);
    });
};
