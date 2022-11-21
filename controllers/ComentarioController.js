const Comentario = require("../models/comentarioModel");
//const Publicacion = require("../models/publicacionModel");

const createComentario = (req, res) => {
  const { nombre, descripcion, publicacion_comentada } = req.body;
  const newComentario = new Comentario({
    nombre,
    descripcion,
    publicacion_comentada
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

const deleteComentario = (req, res) => {
  const { id } = req.params;
  Comentario.findByIdAndDelete(id, (err, comentario) => {
    if (err) {
      return res.status(400).send({ message: "Error al obtener el comentario" });
    }
    if(!comentario) {
      return res.status(404).send({ message: "comentario no encontrado" });
    }
    return res.status(200).send(comentario);
  });
};

module.exports = {
  createComentario,
  getComentarios,
  deleteComentario
};