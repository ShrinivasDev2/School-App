const mongoose = require("mongoose");

const applicationFeeSchema = new mongoose.Schema({
  application_name: {
    type: String,
  },
  amount: {
    type: Number,
  },
  student_name: {
    type: String,
  },
  class_name: {
    type: String,
  },
  paid_date: {
    type: Date,
  },
});

const admissionFeeSchema = new mongoose.Schema({
  amount: {
    type: Number,
  },
  student_name: {
    type: String,
  },
  class_name: {
    type: String,
  },
  paid_date: {
    type: Date,
  },
});

const transferCertificateSchema = new mongoose.Schema({
  uid: {
    type: String,
  },
  name: {
    type: String,
  },
  class_name: {
    type: String,
  },
  tc_number: {
    type: String,
  },
  amount: {
    type: Number,
  },
  paid_date: {
    type: Date,
  },
});

const studyCertificateSchema = new mongoose.Schema({
  uid: {
    type: String,
  },
  name: {
    type: String,
  },
  class_name: {
    type: String,
  },
  amount: {
    type: Number,
  },
  paid_date: {
    type: Date,
  },
});

const materialSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  uid: {
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
  name: {
    type: String,
  },
  uid: {
    type: String,
  },
  class_name: {
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
    type: [studyCertificateSchema],
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
