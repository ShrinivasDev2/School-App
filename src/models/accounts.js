const mongoose = require("mongoose");

const applicationFeeSchema = new mongoose.Schema({
  id: {
    type: Number,
  },
  application_name: {
    type: String,
  },
  amount: {
    type: Number,
  },
  paid_date: {
    type: Date,
  },
});

const admissionFeeSchema = new mongoose.Schema({
  id: {
    type: Number,
  },
  amount: {
    type: Number,
  },
  paid_date: {
    type: Date,
  },
});

const transferCertificateSchema = new mongoose.Schema({
  id: {
    type: Number,
  },
  uid: {
    type: String,
  },
  name: {
    type: String,
  },
  date_issued: {
    type: Date,
  },
  tc_number: {
    type: String,
  },
  amount: {
    type: Number,
  },
});

const studeyCertificateSchema = new mongoose.Schema({
  id: {
    type: Number,
  },
  uid: {
    type: String,
  },
  name: {
    type: String,
  },
  amount: {
    type: Number,
  },
  issued_date: {
    type: Date,
  },
});

const materialSchema = new mongoose.Schema({
  id: {
    type: Number,
  },
  name: {
    type: String,
  },
  item: {
    type: String,
  },
  amount: {
    type: Number,
  },
  paid_date: {
    type: Date,
  },
});

const otherFeesSchema = new mongoose.Schema({
  id: {
    type: Number,
  },
  name: {
    type: String,
  },
  amount: {
    type: Number,
  },
  paid_date: {
    type: Date,
  },
});

const accountsSchema = new mongoose.Schema({
  application_fee: {
    type: [applicationFeeSchema],
  },
  admission_fee: {
    type: [admissionFeeSchema],
  },
  transfer_certificate: {
    type: [transferCertificateSchema],
  },
  study_certificate: {
    type: [studeyCertificateSchema],
  },
  materials_fee: {
    type: [materialSchema],
  },
  other_fee: {
    type: [otherFeesSchema],
  },
});

const Accounts = mongoose.model("Accounts", accountsSchema);

module.exports = Accounts;
