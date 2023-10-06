const Accounts = require("../models/accounts");

const addApplicationFees = async (req, res) => {
  try {
    const { id, application_name, amount, paid_date } = req.body;
    const newApplicationFee = {
      id,
      application_name,
      amount,
      paid_date,
    };
    const accounts = await Accounts.updateOne(
      {},
      { $push: { application_fee: newApplicationFee } },
      { upsert: true } // Create a new document if it doesn't exist
    );
    res.json({ message: "Application Fees Added Successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const addAdmissionFee = async (req, res) => {
  try {
    const { id, amount, paid_date } = req.body;
    const newAdmissionFee = {
      id,
      amount,
      paid_date,
    };
    const accounts = await Accounts.updateOne(
      {},
      { $push: { admission_fee: newAdmissionFee } },
      { upsert: true }
    );
    res.json({ message: "Admission Fees Added Successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const addTransferCertificateFee = async (req, res) => {
  try {
    const { id, uid, name, date_issued, tc_number, amount } = req.body;
    const newTransferCertificateFee = {
      id,
      uid,
      name,
      date_issued,
      tc_number,
      amount,
    };
    const accounts = await Accounts.updateOne(
      {},
      { $push: { transfer_certificate: newTransferCertificateFee } },
      { upsert: true }
    );
    res.json({ message: "TC details added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const addStudyCertificateFee = async (req, res) => {
  try {
    const { id, uid, name, amount, issued_date } = req.body;
    const newStudyCertificateFee = {
      id,
      uid,
      name,
      amount,
      issued_date,
    };
    const accounts = await Accounts.updateOne(
      {},
      { $push: { study_certificate: newStudyCertificateFee } },
      { upsert: true }
    );
    res.json({ message: "Study certificate Added Successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const addMaterialFee = async (req, res) => {
  try {
    const { id, name, item, amount, paid_date } = req.body;
    const newMaterialFee = {
      id,
      name,
      item,
      amount,
      paid_date,
    };
    const accounts = await Accounts.updateOne(
      {},
      { $push: { materials_fee: newMaterialFee } },
      { upsert: true }
    );
    res.json({ message: "Material Fees Added Successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const addOtherFee = async (req, res) => {
  try {
    const { id, name, amount, paid_date } = req.body;
    const newOtherFee = {
      id,
      name,
      amount,
      paid_date,
    };
    const accounts = await Accounts.updateOne(
      {},
      { $push: { other_fee: newOtherFee } },
      { upsert: true }
    );
    res.json({ message: "Other Fees Added Successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getAccountsDetails = async (req, res) => {
  try {
    const accounts = await Accounts.find();

    const ApplicationsList = {
      applications: accounts.map((account) => account.application_fee),
    };

    const AdmissionsList = {
      admissions: accounts.map((account) => account.admission_fee),
    };

    const TransferCertificatesList = {
      transferCertificates: accounts.map(
        (account) => account.transfer_certificate
      ),
    };

    const StudyCertificatesList = {
      studyCertificates: accounts.map((account) => account.study_certificate),
    };

    const MaterialsFeesList = {
      materialsFees: accounts.map((account) => account.materials_fee),
    };

    const OtherFeesList = {
      otherFees: accounts.map((account) => account.other_fee),
    };

    res.status(200).json({
      ApplicationsList,
      AdmissionsList,
      TransferCertificatesList,
      StudyCertificatesList,
      MaterialsFeesList,
      OtherFeesList,
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Internal Server Error!" });
  }
};

module.exports = {
  addApplicationFees,
  addAdmissionFee,
  addTransferCertificateFee,
  addStudyCertificateFee,
  addMaterialFee,
  addOtherFee,
  getAccountsDetails,
};
