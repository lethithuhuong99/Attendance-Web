// ---------------- attendance -------------------

const { getMaxListeners } = require("../model/attendance");
var Attendancedb = require("../model/attendance");

// create and save new attendance
exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // new attendance
  const attendance = new Attendancedb({
    date: req.body.date,
    userId: req.body.userId,
    // name: req.body.name,
    mask: req.body.mask,
    checkIn: req.body.checkIn,
    checkOut: req.body.checkOut,
  });

  // save attendance in the database
  attendance
    .save(attendance)
    .then((data) => {
      // res.send(data)
      res.redirect("/attendance");
      // res.back();
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while creating a create operation",
      });
    });
};

//  retrieve and return all attendances/ retrive ans return a single attendance
exports.find = (req, res) => {
  if (req.query.id) {
    const id = req.query.id;

    Attendancedb.findById(id)
      .then((data) => {
        if (!data) {
          res
            .status(404)
            .send({ message: "Not found attendance with id: " + id });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res
          .status(500)
          .send({ message: "error retrieving attendance with id " + id });
      });
  } else {
    Attendancedb.find()
      .then((attendance) => {
        res.send(attendance);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message ||
            "Erro occurred while retriving attendance information",
        });
      });
  }
};

// update a new identified attendance by attendance id
exports.update = (req, res) => {
  if (!req.body) {
    return res
      .status(400)
      .send({ message: "Data to update can not be empty! " });
  }

  const id = req.params.id;
  Attendancedb.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: "cannot update attendance. Maybe attendance not found",
        });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error update attendance information" });
    });
};

// Delete a attendance with specified attendance id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Attendancedb.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res
          .status(404)
          .send({ message: `Cannot Delete with id ${id}. Maybe id is wrong` });
      } else {
        res.send({
          message: "attendance was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete attendance with id=" + id,
      });
    });
};

exports.aggregate = (req, res) => {
  Attendancedb.aggregate([
    {
      $lookup: {
        from: "employeedbs",
        localField: "userId",
        foreignField: "id",
        as: "attendancedetail",
      },
    },

    // {
    //   $unwind: "$attendancedetail",
    // },
    {
      $project: {
        // "attendancedetail.id": 1,
        // "attendancedetail.name": 1,
        // "attendancedetail.email": 1,
        // "attendancedetail.checkIn": 1,
        _id: 0,
      },
    },
  ]).exec((err, data) => {
    if (err) {
      res.send(err);
    }
    if (data) {
      res.send(data);
    }
  });
};
