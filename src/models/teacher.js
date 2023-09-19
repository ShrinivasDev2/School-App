const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  class_teacher: {
    type: String,
  },
  subject: {
    type: String,
  },
  mobile_no: {
    type: Number,
  },
  mail_id: {
    type: String,
  },
});

const Teacher = mongoose.model("Teacher", teacherSchema);

module.exports = Teacher;
