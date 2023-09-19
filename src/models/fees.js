const mongoose = require("mongoose");

const installmentSchema = new mongoose.Schema({
  installment_number: { type: Number },
  installment_status: { type: String },
  installment_amount: { type: Number },
  mode_of_payment: { type: String },
  reference_number: { type: String },
  paid_date: { type: Date },
});

const feesSchema = new mongoose.Schema({
  total_fees: {
    type: Number,
  },
  fees_paid: {
    type: Number,
  },
  fees_due: {
    type: Number,
  },
  installments: {
    type: [installmentSchema],
  },
  student: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Student",
  },
});

const Fees = mongoose.model("Fees", feesSchema);

module.exports = Fees;
