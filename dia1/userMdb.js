const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema
({
    login: String,
    password: 
    {
        type: String,
        validate: 
        [
            function(password)
            {
                return password.length >= 6;
            },
            'Peligro de hackeo añade mas campos'
        ],
        select: false
    }
})

// ******************PROFILE***********

const ProfileSchema = new mongoose.Schema
({
    name: 
    {
        type: String,
        enum: ["Pepe", "Paco", "Puri", "Mari"]
    },
    surname: String,
    dateOfBirth: Number,
    comments: String,
    rol: String
})

ProfileSchema.pre('save',function(next)
{
    console.log("Middleware OK");

    if (this.surname.length > 2)
    {
        console.log("Bien hecho!")
        next();
    }
    else
        console.log("Eso no puede ser un apellido")
});

// ******************CREDENTIALS*****************

const CredentialsSchema = new mongoose.Schema({
    address: String,
    phone: Number,
    email: String
})

const UserModel = mongoose.model("User", UserSchema);
const ProfileModel = mongoose.model("Profile", ProfileSchema);
const CredentialsModel = mongoose.model("Credentials", CredentialsSchema);

module.exports = { UserModel, ProfileModel, CredentialsModel };