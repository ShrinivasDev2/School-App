const Teacher = require("../models/teacher");

const addTeacher = async (req, res) => {
  const teacher = req.body;
  try {
    const newTeacher = new Teacher(teacher);
    await newTeacher.save();
    res.status(201).json({ message: "Teacher Data Saved Successfully" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getAllTeacher = async (req, res) => {
  try {
    teachers = await Teacher.find();
    res.status(200).json({ teachers });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "Internal Server Error!" });
  }
};

const editTeacher = async (req, res) => {
  const name = req.params.name;
  try {
    const teacher = await Teacher.findOne({ name: name });
    if (!teacher) {
      return res.json({ message: "No teacher found by the name!" });
    }
    const updatedFields = req.body;
    Object.assign(teacher, updatedFields);
    await teacher.save();
    res.status(200).json({ message: "Teacher Data Updated Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteTeacher = async (req, res) => {
  const name = req.params.name;
  try {
    const teacher = await Teacher.findOneAndDelete({ name: name });

    if (!teacher) {
      return res.status(404).json({ message: "No teacher found by the name!" });
    }

    res.status(200).json({ message: "Teacher Deleted Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { addTeacher, editTeacher, getAllTeacher, deleteTeacher };
