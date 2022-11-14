const Publicacion = require("../models/publicacionModel");

const createPublicacion = (req, res) => {
  const { titulo, publicador, descripcion, rut, correo, domicilio } = req.body;
  const newPublicacion = new Publicacion({
    titulo,
    publicador,
    descripcion,
    rut,
    correo,
    domicilio
  });

newPublicacion.save((err, publicacion) => {
    if (err) {
      return res.status(400).send({ message: "Error al crear la publicacion" });
    }
    return res.status(201).send(publicacion);
  });
};

const getPublicaciones = (req, res) => {
  Publicacion.find({}, (err, publicacion) => {
    if (err) {
      return res.status(400).send({ message: "Error al obtener la publicacion" });
    }
    return res.status(200).send(publicacion);
  });
};

const deletePublicacion = (req, res) => {
  const { id } = req.params;
  Publicacion.findByIdAndDelete(id, (err, publicacion) => {
    if (err) {
      return res.status(400).send({ message: "Error al obtener la publicacion" });
    }
    if(!publicacion) {
      return res.status(404).send({ message: "Publicacion no encontrada" });
    }
    return res.status(200).send(publicacion);
  });
};

module.exports = {
  createPublicacion,
  getPublicaciones,
  deletePublicacion,
};

