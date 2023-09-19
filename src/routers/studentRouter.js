const express = require("express");
const Router = express.Router();
const StudentController = require("../controllers/studentController");

Router.post("/addStudent", StudentController.addStudent);
Router.get("/getAll/:class", StudentController.getStudentsByClass);
Router.put("/editStudent/:uid", StudentController.editStudentDetails);
Router.get("/getAStudent/:uid", StudentController.getAStudent);

module.exports = Router;
