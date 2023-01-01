const Publicacion = require("../models/publicacionModel");

const createPublicacion = (req, res) => {
  const { titulo, autor, descripcion, rut, correo, domicilio, categoria, fecha } = req.body;
  const newPublicacion = new Publicacion({
    titulo,
    autor,
    descripcion,
    rut,
    correo,
    domicilio,
    categoria,
    fecha
  });

newPublicacion.save((err, publicacion) => {
    if (err) {
      return res.status(400).send({ message: "Error al crear la publicacion" });
    }
    return res.status(201).send(publicacion);
  });
};

const getPublicaciones = (req, res) => {
  Publicacion.find({}).populate({path: 'categoria' }).exec( (err, publicacion) => {
    if (err) {
      return res.status(400).send({ message: "Error al obtener las publicaciones" });
    }
    return res.status(200).send(publicacion);
  });
};

const updatePublicacion = (req, res) => {
  const { id } = req.params;
  Publicacion.findByIdAndUpdate(id, req.body, (err, publicacion) => {
    if (err) {
      return res.status(400).send({ message: "Error al obtener la publicacion" });
    }
    if(!publicacion) {
      return res.status(404).send({ message: "Publicacion no encontrada" });
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

const getSpecificPublicacion = (req, res) => {
  const { id } = req.params;
  Publicacion.findById(id).populate({ path: 'category' }).exec((err, publicacion) => {
      if (err) {
          return res.status(400).send({ message: "Error al obtener la publicacion" })
      }
      if (!publicacion) {
          return res.status(404).send({ message: "Publicacion no encontrada" })
      }
      return res.status(200).send(publicacion)
  })
}

module.exports = {
  createPublicacion,
  getPublicaciones,
  updatePublicacion,
  deletePublicacion,
  getSpecificPublicacion
};

