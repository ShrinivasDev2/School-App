const Student = require("../models/student");
const Fees = require("../models/fees");

const addStudent = async (req, res) => {
  const student = req.body;
  const newStudent = new Student(student);
  try {
    const savedStudent = await newStudent.save();
    let newFees = [];
    if (student.class === "10TH") {
      newFees = new Fees({
        total_fees: 16000,
        fees_paid: 0,
        fees_due: 16000,
        installments: [
          {
            installment_number: 1,
            installment_amount: 6000,
            installment_status: "Unpaid",
          },
          {
            installment_number: 2,
            installment_amount: 5000,
            installment_status: "Unpaid",
          },
          {
            installment_number: 3,
            installment_amount: 5000,
            installment_status: "Unpaid",
          },
        ],
        student: savedStudent._id,
      });
    } else {
      newFees = new Fees({
        total_fees: 15000,
        fees_paid: 0,
        fees_due: 15000,
        installments: [
          {
            installment_number: 1,
            installment_amount: 5000,
            installment_status: "Unpaid",
          },
          {
            installment_number: 2,
            installment_amount: 5000,
            installment_status: "Unpaid",
          },
          {
            installment_number: 3,
            installment_amount: 5000,
            installment_status: "Unpaid",
          },
        ],
        student: savedStudent._id,
      });
    }
    await newFees.save();
    res.status(201).json({ message: "Student Data saved Successfully" });
  } catch (e) {
    res.status(400).send(e);
  }
};

const getStudentsByClass = async (req, res) => {
  const studentClass = req.params.class;
  console.log(studentClass);
  try {
    const students = await Student.find({ class: studentClass });
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const editStudentDetails = async (req, res) => {
  const uid = req.params.uid;
  try {
    const student = await Student.findOne({ uid });
    if (!student) {
      return res.status(404).json({ error: "Student Not Found!" });
    }
    const updatedFields = req.body;
    Object.assign(student, updatedFields);
    await student.save();
    res.status(200).json({ Message: "Student Details Updated Successfully" });
  } catch (e) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getAStudent = async (req, res) => {
  const uid = req.params.uid;
  try {
    const student = await Student.findOne({ uid: uid });
    res.status(200).json(student);
  } catch (e) {
    console.log(e);
    res.json({ message: "Internal Server Error" });
  }
};

module.exports = {
  addStudent,
  getStudentsByClass,
  editStudentDetails,
  getAStudent,
};
