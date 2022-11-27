const mongoose = require("mongoose");
const Schema = mongoose.Schema;
<<<<<<< HEAD

const reporteSchema = new Schema({
=======
const Publicacion = mongoose.model("publicacion");

const ReporteSchema = new Schema({
>>>>>>> 93890319c041e5b5c0641a983bf4a86ff14cfc0f
    nombre:{
        type : String,
        required: true
    },
    descripcion:{
        type: String,
        required: true
<<<<<<< HEAD
=======
    },
    publicacion_reportada: {
        type: Schema.ObjectId,
        ref: "publicacion"
>>>>>>> 93890319c041e5b5c0641a983bf4a86ff14cfc0f
    }
    /*
    fecha:{
        type: Date,
        default: Date.now()
    }*/
});
<<<<<<< HEAD
module.exports = mongoose.model("comentario", reporteSchema);
=======
module.exports = mongoose.model("reporte", ReporteSchema);
>>>>>>> 93890319c041e5b5c0641a983bf4a86ff14cfc0f
