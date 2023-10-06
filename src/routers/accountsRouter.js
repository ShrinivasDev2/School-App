const express = require("express");
const Router = express.Router();
const accountsController = require("../controllers/accountsController");

Router.post("/add-application-fees", accountsController.addApplicationFees);
Router.post("/add-admission-fees", accountsController.addAdmissionFee);
Router.post("/add-tc-fees", accountsController.addTransferCertificateFee);
Router.post(
  "/add-studyCertificate-fees",
  accountsController.addStudyCertificateFee
);
Router.post("/add-materials-fees", accountsController.addMaterialFee);
Router.post("/add-other-fees", accountsController.addOtherFee);
Router.get("/get-account-details", accountsController.getAccountsDetails);

module.exports = Router;
