const express = require("express");
const Router = express.Router();
const FeesController = require("../controllers/feesController");

Router.get(
  "/getStudentsWithFeesStatus/:class",
  FeesController.getStudentsWithFeesStatus
);
Router.get("/getFeesDetails/:uid", FeesController.getFeesStatusOfAStudent);
Router.post("/addFees", FeesController.addFees);

module.exports = Router;
