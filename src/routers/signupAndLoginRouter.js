const express = require("express");
const Router = express.Router();
const signupAndLoginController = require("../controllers/signupAndLoginController");

Router.post("/signup", signupAndLoginController.signup);
Router.post("/login", signupAndLoginController.login);

module.exports = Router;
