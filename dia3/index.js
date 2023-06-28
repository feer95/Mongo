let mongoose = require("mongoose");
let teachersMdb = require("./teachersMdb");


mongoose.connect('mongodb+srv://MongoAtlasTest:MongoAtlasTest@codenotch.qfhpp53.mongodb.net/',
                {useNewUrlParser: false, useUnifiedTopology: false})

let teacher1 = new teachersMdb.profesor({teacher_first_name: "Profesor", teacher_last_name: "Primero"})
let teacher2 = new teachersMdb.profesor({teacher_first_name: "Profesor", teacher_last_name: "Segundo"})
let teacher3 = new teachersMdb.profesor({teacher_first_name: "Profesor", teacher_last_name: "Tercero"})
let teacher4 = new teachersMdb.profesor({teacher_first_name: "Profesor", teacher_last_name: "Cuarto"})
let teacher5 = new teachersMdb.profesor({teacher_first_name: "Profesor", teacher_last_name: "Quinto"})
let teacher6 = new teachersMdb.profesor({teacher_first_name: "Profesor", teacher_last_name: "Sexto"})
let teacher7 = new teachersMdb.profesor({teacher_first_name: "Profesor", teacher_last_name: "Septimo"})
let teacher8 = new teachersMdb.profesor({teacher_first_name: "Profesor", teacher_last_name: "Octavo"})
let teacher9 = new teachersMdb.profesor({teacher_first_name: "Profesor", teacher_last_name: "Noveno"})
let teacher10 = new teachersMdb.profesor({teacher_first_name: "Profesor", teacher_last_name: "Decimo"})

let mark1 = new teachersMdb.notas({date: "2022-01-01", mark: 8, student_first_name: "Estudiante", student_last_name: "Primero", group_name: "A", subject_name: "Front", teachers: [teacher1, teacher2]})
let mark2 = new teachersMdb.notas({date: "2022-02-01", mark: 7, student_first_name: "Estudiante", student_last_name: "Segundo", group_name: "B", subject_name: "Back", teachers: [teacher3, teacher4]})
let mark3 = new teachersMdb.notas({date: "2022-03-01", mark: 6, student_first_name: "Estudiante", student_last_name: "Tercero", group_name: "A", subject_name: "BBDD", teachers: [teacher5, teacher6]})
let mark4 = new teachersMdb.notas({date: "2022-04-01", mark: 9, student_first_name: "Estudiante", student_last_name: "Cuarto", group_name: "B", subject_name: "Back", teachers: [teacher7, teacher8]})
let mark5 = new teachersMdb.notas({date: "2022-05-01", mark: 5, student_first_name: "Estudiante", student_last_name: "Quinto", group_name: "A", subject_name: "BBDD", teachers: [teacher9, teacher10]})
let mark6 = new teachersMdb.notas({date: "2022-06-01", mark: 6, student_first_name: "Estudiante", student_last_name: "Sexto", group_name: "B", subject_name: "Front", teachers: [teacher10, teacher9]})
let mark7 = new teachersMdb.notas({date: "2022-07-01", mark: 7, student_first_name: "Estudiante", student_last_name: "Septimo", group_name: "A", subject_name: "Front", teachers: [teacher8, teacher7]})
let mark8 = new teachersMdb.notas({date: "2022-08-01", mark: 8, student_first_name: "Estudiante", student_last_name: "Octavo", group_name: "B", subject_name: "Back", teachers: [teacher6, teacher5]})
let mark9 = new teachersMdb.notas({date: "2022-09-01", mark: 9, student_first_name: "Estudiante", student_last_name: "Noveno", group_name: "A", subject_name: "Back", teachers: [teacher4, teacher3]})
let mark10 = new teachersMdb.notas({date: "2022-10-01", mark: 10, student_first_name: "Estudiante", student_last_name: "Decimo", group_name: "B", subject_name: "BBDD", teachers: [teacher2, teacher1]})

// teacher1.save()
// .then(() => {
// console.log("Teacher1 guardado");
// return teacher2.save();
// })
// .then(() => {
// console.log("Teacher2 guardado");
// return teacher3.save();
// })
// .then(() => {
// console.log("Teacher3 guardado");
// return teacher4.save();
// })
// .then(() => {
// console.log("Teacher4 guardado");
// return teacher5.save();
// })
// .then(() => {
// console.log("Teacher5 guardado");
// return teacher6.save();
// })
// .then(() => {
// console.log("Teacher6 guardado");
// return teacher7.save();
// })
// .then(() => {
// console.log("Teacher7 guardado");
// return teacher8.save();
// })
// .then(() => {
// console.log("Teacher8 guardado");
// return teacher9.save();
// })
// .then(() => {
// console.log("Teacher9 guardado");
// return teacher10.save();
// })
// .then(() => {
// console.log("Teacher10 guardado");
// return mark1.save();
// })
// .then(() => {
// console.log("Mark1 guardado");
// return mark2.save();
// })
// .then(() => {
// console.log("Mark2 guardado");
// return mark3.save();
// })
// .then(() => {
// console.log("Mark3 guardado");
// return mark4.save();
// })
// .then(() => {
// console.log("Mark4 guardado");
// return mark5.save();
// })
// .then(() => {
// console.log("Mark5 guardado");
// return mark6.save();
// })
// .then(() => {
// console.log("Mark6 guardado");
// return mark7.save();
// })
// .then(() => {
// console.log("Mark7 guardado");
// return mark8.save();
// })
// .then(() => {
// console.log("Mark8 guardado");
// return mark9.save();
// })
// .then(() => {
// console.log("Mark9 guardado");
// return mark10.save();
// })
// .then(() => {
// console.log("Mark10 guardado");
// })
// .catch((error) => {
// console.log(error);
// });

// FUNCIONES RETO 1  ***********************************

    // 1 *********
function calcMed(asignatura) 
{
    teachersMdb.notas.aggregate([
        {
            $match: { subject_name: asignatura }
        },
        {
            $group: {_id: asignatura, media: { $avg: "$mark" }}
        }
    ])
    .then(result => 
    {
        if (result.length > 0) 
        {
            console.log(`La nota media de la asignatura ${asignatura} es: ${result[0].media}`);
        } 
        else 
        {
            console.log(`No se encontraron registros para la asignatura ${asignatura}`);
        }
    })
    .catch(error => 
    {
        console.log("Error al calcular la nota media:", error);
    });
}
  
// calcMed("Front");
  
    // 2 *********
function getAllStu() 
{
    try 
    {
        teachersMdb.notas.aggregate([{$count:"Total alumnos"}])
        .then((result)=>
        {
            console.log(result)
        })
    } 
    catch (error) 
    {
        console.log(error);
    }
}
// getAllStu();

    // 3 *********
function getNomApe() 
{
    teachersMdb.notas.aggregate([
    {
        $project: 
        {
          _id: 0,
          student_first_name: 1,
          student_last_name: 1
        }
    }
    ])
    .then((result) => 
    {
        console.log(result);
    })
    .catch((error) => 
    {
        console.log(error);
    });
}
  
// getNomApe();

    // 4 *********
function getTeachersNomApe() 
{
    teachersMdb.profesor.aggregate([
    {
        $project: 
        {
          _id: 0,
          teacher_first_name: 1,
          teacher_last_name: 1
        }
    }
    ])
    .then((result) => 
    {
        console.log(result);
    })
    .catch((error) => 
    {
        console.log(error);
    });
}
  
// getTeachersNomApe();
  
    // 5 *********
function totalXgrupo() 
{
    teachersMdb.notas.aggregate([
    {
        $group: 
        {
            _id: "$group_name",
            totalStudents: { $sum: 1 }
        }
    },
    {
        $sort: { _id: -1 }
    }
    ])
    .then((result) => 
    {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });
}
  
// totalXgrupo();

    // 6 *********
function medAsig ()
{
    teachersMdb.notas.aggregate([
        {
            $group: {_id: "$subject_name", "Nota Media": {$avg: "$mark"}}
        },
        {
            $sort: {"Nota Media": -1}
        },
        {
            $limit: 5
        }
    ])
    .then((result)=>
    {
        console.log(result)
    })
    .catch ((error) => 
    {
        console.log(error)
    })
}

// medAsig()

    // 7 *********
function profXasig() 
{
    teachersMdb.notas.aggregate([
        {
            $unwind: "$teachers"
        },
        {
            $group: 
            {
                _id: "$subject_name",
                impartidaPor: { $sum: 1 }
            }
        }
    ])
        .then((result) => 
        {
            console.log(result);
        })
        .catch((error) => 
        {
            console.log(error);
        });
}
      
// profXasig();

// RETO 2 ******************************************************

    // 1 ************
function alumXnotaYfecha() 
{
    const startDate = '2022-01-01';
    const endDate = '2022-12-31';
    
    teachersMdb.notas.find({
        $or: [
        { mark: { $gt: 8 } },
        { date: { $gte: startDate, $lte: endDate } }
        ]
    }, 
    {
        student_first_name: 1,
        student_last_name: 1,
        mark: 1
    })
    .then((result) => 
    {
        console.log(result);
    })
    .catch((error) => 
    {
        console.log(error);
    });
}
    
// alumXnotaYfecha();
      
    // 2 ************
function mediaXasigYfecha() 
{
    const startDate = new Date("2022-01-01"); 
    const endDate = new Date("2023-12-31"); 
    
    teachersMdb.notas.aggregate([
        {
        $match: {
            date: { $gte: startDate, $lte: endDate }
        }
        },
        {
        $group: {
            _id: "$subject_name",
            media: { $avg: "$mark" }
        }
        }
    ])
    .then((result) => {
    console.log(result);
    })
    .catch((error) => {
    console.log(error);
    });
}
    
// mediaXasigYfecha();
    
    // 3 ************
function mediaXalumnYfecha() 
{
    const startDate = new Date("2022-06-28"); 
    const endDate = new Date("2023-06-28"); 
    
    teachersMdb.notas.aggregate([
        {
        $match: {
            date: { $gte: startDate, $lte: endDate }
        }
        },
        {
        $group: {
            _id: {
            student_first_name: "$student_first_name",
            student_last_name: "$student_last_name"
            },
            laMediaEs: { $avg: "$mark" }
        }
        }
    ])
    .then((result) => {
    console.log(result);
    })
    .catch((error) => {
    console.log(error);
    });
}
    
// mediaXalumnYfecha();
      
    // 4 ************
function getSubjectsByTeacher(teacherFirstName, teacherLastName) 
{
    teachersMdb.notas.aggregate([
        {
            $unwind: "$teachers"
        },
        {
            $match: 
            {
                "teachers.teacher_first_name": teacherFirstName,
                "teachers.teacher_last_name": teacherLastName
            }
        },
        {
            $group: 
            {
                _id: 
                {student_first_name: "$student_first_name", student_last_name: "$student_last_name"},
                totalSubjects: { $sum: 1 }
            }
        }
    ])
    .then((result) => {
    console.log(result);
    })
    .catch((error) => {
    console.log(error);
    });
}
    
// getSubjectsByTeacher("Profesor", "Cuarto");


