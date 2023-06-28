const mongoose = require ("mongoose");

const teacherSchema = new mongoose.Schema({
    teacher_first_name: String,
    teacher_last_name: String,
})
const marksSchema = new mongoose.Schema({
    date: Date,
    mark: Number,
    student_first_name: String,
    student_last_name: String,
    group_name: String,
    subject_name: String,
    teachers: [teacherSchema]
})

const notas = mongoose.model("Notas", marksSchema);
const profesor = mongoose.model("Profes", teacherSchema);

module.exports = {notas, profesor};


