const express = require("express");
const Router = express.Router();
const TeacherController = require("../controllers/teacherController");

Router.post("/addTeacher", TeacherController.addTeacher);
Router.get("/getAllTeachers", TeacherController.getAllTeacher);
Router.put("/editTeacher/:name", TeacherController.editTeacher);
Router.delete("/deleteTeacher/:name", TeacherController.deleteTeacher);

module.exports = Router;
