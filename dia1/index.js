let mongoose = require("mongoose");
let userMdb = require("./userMdb");



mongoose.connect('mongodb+srv://MongoAtlasTest:MongoAtlasTest@codenotch.qfhpp53.mongodb.net/',
                {useNewUrlParser: false, useUnifiedTopology: false})


// let user = new userMdb.UserModel 
// ({
//     login: "prueba",
//     password: "ContraseñaDePrueba"

// });

// let profile = new userMdb.ProfileModel 
// ({
//     name: "Paco",
//     surname: "Martin",
//     dateOfBirt: 1927,
//     comments: "Está mayor",
//     rol: "Anciano"
// });

let credentials = new userMdb.CredentialsModel 
({
    address: "Calle de prueba",
    phone: 666777888,
    email: "estoymayor@gmail.com"
});

// user.save()
// profile.save()
credentials.save()
.then((data) =>
{
    console.log(data);
})
.catch((err) =>
{
    console.log(err)
});