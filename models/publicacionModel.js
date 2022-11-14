const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const PublicacionSchema = new Schema({
  titulo: {
    type: String,
    required: true,
  },
  publicador: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  rut: {
    type: String,
    required: true,
  },
  correo: {
    type: String,
    required: true
  },
  domicilio: {
    type: String,
    required: true
  }/*,
  fecha: {
    type: Date,
    default: Date.now()
  },
  categoria: {
    type: Schema.ObjectId,
    ref: "categoria",
  }*/
});

module.exports = mongoose.model("publicacion", PublicacionSchema);



