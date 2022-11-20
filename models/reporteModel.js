const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Publicacion = mongoose.model("publicacion");

const reporteSchema = new Schema({
    nombre:{
        type : String,
        required: true
    },
    descripcion:{
        type: String,
        required: true
    },
    publicacion_reportada: {
        type: Schema.ObjectId,
        ref: "publicacion"
    }
    /*
    fecha:{
        type: Date,
        default: Date.now()
    }*/
});
module.exports = mongoose.model("reporte", reporteSchema);