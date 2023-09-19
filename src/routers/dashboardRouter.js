const express = require("express");
const Router = express.Router();
const DashboardController = require("../controllers/dashboardController");

Router.get("/dashboard/:class", DashboardController.getDashboardData);

module.exports = Router;
