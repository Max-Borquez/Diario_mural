const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ComentarioSchema = new Schema({
    nombre:{
        type : String,
        required: true
    },
    descripcion:{
        type: String,
        required: true
    }
    /*
    fecha:{
        type: Date,
        default: Date.now()
    }*/
});

module.exports = mongoose.model("comentario", ComentarioSchema);