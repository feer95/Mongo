let mongoose = require("mongoose");
let teacherMdb = require("./teacherMdb");



mongoose.connect('mongodb+srv://MongoAtlasTest:MongoAtlasTest@codenotch.qfhpp53.mongodb.net/',
                {useNewUrlParser: false, useUnifiedTopology: false})



let teacher1 = new teacherMdb.teacher({ firstName: "Profesor", lastName: "Primero", groups: ["1A", "1B"] });
let teacher2 = new teacherMdb.teacher({ firstName: "Profesor", lastName: "Segundo", groups: ["1C", "1D"] });
let teacher3 = new teacherMdb.teacher({ firstName: "Profesor", lastName: "Tercero", groups: ["3A", "3B"] });
let teacher4 = new teacherMdb.teacher({ firstName: "Profesor", lastName: "Cuarto", groups: ["3C", "3D"] });

let subject1 = new teacherMdb.subject({ title: "Asignatura 1", teacher: [teacher1, teacher2] });
let subject2 = new teacherMdb.subject({ title: "Asignatura 2", teacher: [teacher3, teacher4] });
let subject3 = new teacherMdb.subject({ title: "Asignatura 3", teacher: [teacher2, teacher4] });
let subject4 = new teacherMdb.subject({ title: "Asignatura 4", teacher: [teacher1, teacher3] });
                
let notas1 = new teacherMdb.mark({date: '2022-01-01', mark: 5, subject: [subject1]})
let notas2 = new teacherMdb.mark({date: '2021-02-02', mark: 6, subject: [subject2]})
let notas3 = new teacherMdb.mark({date: '2020-03-03', mark: 7, subject: [subject3]})
let notas4 = new teacherMdb.mark({date: '2019-04-04', mark: 8, subject: [subject4]})

let estudiante1 = new teacherMdb.student({firstName: "Estudiante", lastName: "Primero", marks: [notas1, notas2]})
let estudiante2 = new teacherMdb.student({firstName: "Estudiante", lastName: "Segundo", marks: [notas3, notas4]})
let estudiante3 = new teacherMdb.student({firstName: "Estudiante", lastName: "Tercero", marks: [notas2, notas4]})
let estudiante4 = new teacherMdb.student({firstName: "Estudiante", lastName: "Cuarto", marks: [notas1, notas3]})

// teacher1.save()
// .then((result)=>{
//     console.log("Teacher1 guardado");
//     return teacher2.save();
// })
// .then((result)=>{
//     console.log("Teacher2 guardado");
//     return teacher3.save();
// })
// .then((result)=>{
//     console.log("Teacher3 guardado");
//     return teacher4.save();
// })
// .then((result)=>{
//     console.log("Teacher4 guardado");
//     return subject1.save();
// })
// .then((result)=>{
//     console.log("Subject1 guardado");
//     return subject2.save();
// })
// .then((result)=>{
//     console.log("Subject2 guardado");
//     return subject3.save();
// })
// .then((result)=>{
//     console.log("Subject3 guardado");
//     return subject4.save();
// })
// .then((result)=>{
//     console.log("Subject4 guardado");
//     return notas1.save();
// })
// .then((result)=>{
//     console.log("Notas1 guardado");
//     return notas2.save();
// })
// .then((result)=>{
//     console.log("Notas2 guardado");
//     return notas3.save();
// })
// .then((result)=>{
//     console.log("Notas3 guardado");
//     return notas4.save();
// })
// .then((result)=>{
//     console.log("Notas4 guardado");
//     return estudiante1.save();
// })
// .then((result)=>{
//     console.log("Estudiante1 guardado");
//     return estudiante2.save();
// })
// .then((result)=>{
//     console.log("Estudiante2 guardado");
//     return estudiante3.save();
// })
// .then((result)=>{
//     console.log("Estudiante3 guardado");
//     return estudiante4.save();
// })
// .then((result)=>{
//     console.log("Estudiante4 guardado");
// })
// .catch((error)=>{
//     console.log(error);
// });


// FUNCIONES *************************************

async function obtenerNotas(firstName, lastName) 
{
    try 
    {
      const estudiante = await teacherMdb.student.findOne({ firstName, lastName });
      if (estudiante) 
      {
        const notas = estudiante.marks.map((mark) => mark.mark);
        console.log(`Notas de ${firstName} ${lastName}: ${notas.join(", ")}`);
      } 
      else 
      {
        console.log(`Alumno ${firstName} ${lastName} no encontrado.`);
      }
    } 
    catch (error) 
    {
      console.log(error);
    }
}
  
obtenerNotas("Estudiante", "Primero");
//**************************************** 
  
async function obtenerAsignaturas(firstName, lastName) 
{
    try 
    {
        const estudiante = await teacherMdb.student.findOne({ firstName, lastName });
        if (estudiante) 
        {
            const asignaturas = estudiante.marks.map((mark) => 
            {
                if (mark.subject && mark.subject.length > 0) 
                {
                    return mark.subject[0].title;
                }
            });
            console.log(`Asignaturas de ${firstName} ${lastName}: ${asignaturas.join(", ")}`);
        } 
        else 
        {
            console.log(`Alumno ${firstName} ${lastName} no encontrado.`);
        }
    } 
    catch (error) 
    {
      console.log(error);
    }
}
  
obtenerAsignaturas("Estudiante", "Primero");
//**********************************************

async function obtenerProfesoresAlumno(firstName, lastName) {
    try {
      const estudiante = await teacherMdb.student.findOne({ firstName, lastName });
      if (estudiante) {
        const profesores = [];
        estudiante.marks.forEach((mark) => {
          if (mark.subject && mark.subject.length > 0 && mark.subject[0].teacher) {
            mark.subject[0].teacher.forEach((teacher) => {
              const nombreProfesor = `${teacher.firstName} ${teacher.lastName}`;
              if (!profesores.includes(nombreProfesor)) {
                profesores.push(nombreProfesor);
              }
            });
          }
        });
        console.log(`Profesores de ${firstName} ${lastName}: ${profesores.join(", ")}`);
      } else {
        console.log(`Alumno ${firstName} ${lastName} no encontrado.`);
      }
    } catch (error) {
      console.log(error);
    }
}
  
obtenerProfesoresAlumno("Estudiante", "Primero");
 
  
  
   
  






  
  