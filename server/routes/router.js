const express = require("express");
const route = express.Router();

const services = require("../services/render");

const controller = require("../controller/controller");
const attendanceController = require("../controller/attendance-controller");

/**
 * @description Root Route
 * @method GET /
 */
route.get("/", services.homeRoutes);

/**
 * @description add users
 * @method GET /add-user
 */
route.get("/add-user", services.add_user);

/**
 * @description updatda user
 * @method GET /update-user
 */
route.get("/update-user", services.update_user);

// API
route.post("/users", controller.create);
route.get("/users", controller.find);
route.put("/users/:id", controller.update);
route.delete("/users/:id", controller.delete);

// ----------------------------

/**
 * @description Root Route
 * @method GET /attendance
 */
route.get("/attendance", services.attendanceRoutes);

/**
 * @description add attendance
 * @method GET /add-attendance
 */
route.get("/add-attendance", services.add_attendance);
/**
 * @description updatda attendance
 * @method GET /update-attendance
 */
 route.get("/update-attendance", services.update_attendance);

// API
route.post("/attendances", attendanceController.create);
route.get("/attendances", attendanceController.find);
route.put("/attendances/:id", controller.update);
route.delete("/attendances/:id", attendanceController.delete);

module.exports = route;
