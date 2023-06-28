let mongoose = require("mongoose");
let photoMdb = require("./photoMdb");



mongoose.connect('mongodb+srv://MongoAtlasTest:MongoAtlasTest@codenotch.qfhpp53.mongodb.net/',
                {useNewUrlParser: false, useUnifiedTopology: false})


    // Subida de fotos **********************************

function subidaFotos(usuario, url, titulo, descripcion) 
{
    let foto = new photoMdb.photoModel
    ({
        name: usuario,
        photoUrl: url,
        photoTitle: titulo,
        photoDesc: descripcion
    });
    foto.save()
        .then((data) => 
        {
            console.log("Datos guardados:", data);
        })
        .catch((err) => 
        {
            console.log(err);
        });
}
      
// subidaFotos("User1","https://img.freepik.com/vector-premium/rostro-chica-adolescente-mujer","Mi foto 1","Mi descripción 1");
// subidaFotos("User1","https://img.freepik.com/vector-premium/rostro-chica-adolescente-mujer","Mi foto 2","Mi descripción 2");
// subidaFotos("User2","https://img.freepik.com/vector-premium/rostro-chica-adolescente-mujer","Mi foto 1","Mi descripción 1");
      
    // Obtener fotos **********************************

function obtenerFotos(usuario) 
{
    photoMdb.photoModel
        .find({ name: usuario })
        .then((data) => 
        {
            console.log("Fotos encontradas:", data);
        })
        .catch((err) => 
        {
            console.log("Fotos no encontradas:", err);
        });
}
      
// obtenerFotos("User1");

    // Modificar fotos ****************************

function modificarFotos(titulo, descripcion, nuevaDescripcion) 
{
    photoMdb.photoModel
        .updateOne({ photoTitle: titulo, photoDesc: descripcion }, { photoDesc: nuevaDescripcion })
        .then((data) => 
        {
            console.log("Descripción editada:", data);
        })
        .catch((err) => 
        {
            console.log("Fallo en la edición:", err);
        });
}
    
// modificarFotos("Mi foto 1", "Mi descripción 1", "Nueva descripción 1");

    // Eliminar foto **********************************

function eliminarFoto(usuario, titulo) 
{
    photoMdb.photoModel
        .deleteOne({ name: usuario, photoTitle: titulo })
        .then((data) => 
        {
            console.log("Foto eliminada:", data);
        })
        .catch((err) => 
        {
            console.log("Foto no encontrada:", err);
        });
}
      
//eliminarFoto("User1", "Mi foto 1");
      
    // Eliminar todas las fotos **********************************

function eliminarTodo(usuario) 
{
    photoMdb.photoModel
        .deleteMany({ name: usuario })
        .then((data) => 
        {
            console.log("Todas las fotos eliminadas:", data);
        })
        .catch((err) => 
        {
            console.log("Error al eliminar las fotos:", err);
        });
}
    
// eliminarTodo("User1");