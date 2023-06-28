const mongoose = require("mongoose")


const photoSchema = new mongoose.Schema({
    name: String,
    photoUrl: String,
    photoTitle: String,
    photoDesc: String
})

const photoModel = mongoose.model("Photo", photoSchema);

module.exports = { photoModel } ;