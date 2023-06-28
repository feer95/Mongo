const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  groups: [String]
});

const subjectSchema = new mongoose.Schema({
  title: String,
  teacher: [teacherSchema]
});

const marksSchema = new mongoose.Schema({
  date: Date,
  mark: Number,
  subject: [subjectSchema]
});

const studentSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  marks: [marksSchema]
});

const teacher = mongoose.model("Teachers", teacherSchema);
const subject = mongoose.model("Subjects", subjectSchema);
const mark = mongoose.model("Marks", marksSchema);
const student = mongoose.model("Students", studentSchema);

module.exports = { teacher, subject, mark, student };


