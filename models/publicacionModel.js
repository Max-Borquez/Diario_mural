const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const PublicacionSchema = new Schema({
  titulo: {
    type: String,
    required: true,
  },
  autor: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  rut: {
    type: Schema.ObjectId,
    ref: "usuario",
  },
  correo: {
    type: String,
    required: true
  },
  domicilio: {
    type: String,
    required: true
  },
  categoria: {
    type: Schema.ObjectId,
    ref: "categoria"
  },
  fecha: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model("publicacion", PublicacionSchema);



