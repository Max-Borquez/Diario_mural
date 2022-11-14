const Comentario = require("../models/comentarioModel");

const createComentario = (req, res) => {
  const { nombre, descripcion } = req.body;
  const newComentario = new Comentario({
    nombre,
    descripcion
  });

  newComentario.save((err, comentario) => {
    if (err) {
      return res.status(400).send({ message: "Error al crear el comentario" });
    }
    return res.status(201).send(comentario);
  });
};

const getComentarios = (req, res) => {
Comentario.find({}, (err, comentario) => {
    if (err) {
      return res.status(400).send({ message: "Error al obtener el comentario" });
    }
    return res.status(200).send(comentario);
  });
};

module.exports = {
  createComentario,
  getComentarios
};