const Student = require("../models/student");
const Fees = require("../models/fees");

const getDashboardData = async (req, res) => {
  const { class: standard } = req.params;
  try {
    const students = await Student.find({ class: standard });
    let paidStudents = [];
    let unPaidStudents = [];
    let paidAmount = 0;
    let unpaidAmount = 0;

    for (student of students) {
      const fees = await Fees.findOne({ student: student._id });
      if (fees.fees_paid === fees.total_fees) {
        paidStudents.push({
          name: student.name,
          uid: student.uid,
          amount: fees.fees_paid,
        });
      } else {
        unPaidStudents.push({
          name: student.name,
          uid: student.uid,
          amount: fees.fees_paid,
        });
      }
      paidAmount += fees.fees_paid;
      unpaidAmount += fees.fees_due;
    }

    const dashboardData = {
      paidStudents,
      unPaidStudents,
      fees_status: {
        paid: paidAmount,
        unpaid: unpaidAmount,
      },
    };
    res.status(200).json(dashboardData);
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { getDashboardData };
