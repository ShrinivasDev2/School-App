const Fees = require("../models/fees");
const Student = require("../models/student");

const getStudentsWithFeesStatus = async (req, res) => {
  const { class: standard } = req.params;

  try {
    const students = await Student.find({ class: standard });
    let studentsWithFeesStatus = [];

    for (student of students) {
      const fee = await Fees.findOne({ student: student._id });
      studentsWithFeesStatus.push({
        name: student.name,
        uid: student.uid,
        class: student.class,
        fees: fee,
      });
    }
    res.status(200).json({ studentsWithFeesStatus });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getFeesStatusOfAStudent = async (req, res) => {
  try {
    const { uid } = req.params;
    const student = await Student.findOne({ uid });
    if (!student) {
      return res.json({ Error: "No student Found with given UID" });
    }

    const fees = await Fees.findOne({ student: student._id });
    res.status(200).json(fees);
  } catch (e) {
    res.status(500).json({ Error: "Internal Server Error!" });
  }
};

const addFees = async (req, res) => {
  try {
    const {
      uid,
      installment_number,
      installment_amount,
      mode_of_payment,
      reference_number,
      paid_date,
    } = req.body;
    const student = await Student.findOne({ uid });
    if (!student) {
      return res.json({ Error: "No student found with the given UID" });
    }

    let fees = await Fees.findOne({ student: student._id });

    if (!fees) {
      return res.json({ Error: "No fees found for the student" });
    }

    const installmentIndex = installment_number - 1; // Convert installment_number to array index

    if (installmentIndex < 0 || installmentIndex >= fees.installments.length) {
      return res.json({ Error: "Invalid installment_number" });
    }

    fees.fees_paid += installment_amount;
    fees.installments[installmentIndex].installment_status = "Paid";
    fees.fees_due = fees.total_fees - fees.fees_paid;
    fees.installments[installmentIndex].mode_of_payment = mode_of_payment;
    fees.installments[installmentIndex].reference_number = reference_number;
    fees.installments[installmentIndex].paid_date = paid_date;

    await fees.save();
    res.status(201).json({ Message: "Fees added Successfully!" });
  } catch (e) {
    res.status(500).json({ Error: "Internal Server Error" });
  }
};

module.exports = {
  getStudentsWithFeesStatus,
  getFeesStatusOfAStudent,
  addFees,
};
