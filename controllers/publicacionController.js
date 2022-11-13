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

module.exports = {
  createPublicacion,
  getPublicaciones,
};
