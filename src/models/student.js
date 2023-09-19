const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  uid: {
    type: String,
    required: true,
    unique: true, // Set 'uid' as the primary identifier and ensure it's unique
  },
  name: {
    type: String,
    required: true,
  },
  class: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
  },
  sats_no: {
    type: String,
  },
  date_of_birth: {
    type: Date,
  },
  student_adhar: {
    type: Number,
  },
  father_name: {
    type: String,
  },
  father_profile: {
    type: String,
  },
  father_adhar: {
    type: Number,
  },
  father_number: {
    type: Number,
  },
  mother_name: {
    type: String,
  },
  mother_profile: {
    type: String,
  },
  mother_adhar: {
    type: Number,
  },
  mother_number: {
    type: Number,
  },
  guardian: {
    type: String,
  },
  primary_mobile_no: {
    type: Number,
  },
  secondary_mobile_no: {
    type: Number,
  },
  address_line1: {
    type: String,
  },
  address_line2: {
    type: String,
  },
  street: {
    type: String,
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  },
  zip_code: {
    type: String,
  },
  nationality: {
    type: String,
  },
  religion: {
    type: String,
  },
  caste: {
    type: String,
  },
  sub_caste: {
    type: String,
  },
  annual_income: {
    type: Number,
  },
  admission_date: {
    type: Date,
  },
  tc_number: {
    type: String,
  },
  student_remark: {
    type: String,
  },
  profile: {
    type: String,
  },
});

// Set 'uid' as the primary key for the studentSchema
studentSchema.set("toJSON", { virtuals: true });
studentSchema.set("toObject", { virtuals: true });
studentSchema.index({ uid: 1 }, { unique: true });

studentSchema.virtual("fees", {
  ref: "Fees",
  localField: "_id",
  foreignField: "student",
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
