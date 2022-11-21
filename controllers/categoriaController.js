const Categoria = require("../models/categoriaModel");

const createCategoria = (req, res) => {
  const { nombre } = req.body;
  const newCategoria = new Categoria({
    nombre,
  });

  newCategoria.save((err, categoria) => {
    if (err) {
      return res.status(400).send({ message: "Error al crear la categoria" });
    }
    return res.status(201).send(categoria);
  });
};

const getCategorias = (req, res) => {
  Categoria.find({}, (err, categoria) => {
    if (err) {
      return res.status(400).send({ message: "Error al obtener la categoria" });
    }
    return res.status(200).send(categoria);
  });
};

const deleteCategoria = (req, res) => {
  const { id } = req.params;
  Categoria.findByIdAndDelete(id, (err, categoria) => {
    if (err) {
      return res.status(400).send({ message: "Error al obtener la categoria" });
    }
    if (!categoria) {
      return res.status(404).send({ message: "comentario no encontrado" });
    }
    return res.status(200).send(categoria);
  });
};

module.exports = {
  createCategoria,
  getCategorias,
  deleteCategoria
};
