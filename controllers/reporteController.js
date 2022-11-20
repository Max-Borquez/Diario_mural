const Reporte = require("../models/reporteModel");

const createReporte = (req, res) => {
  const { nombre, descripcion, publicacion_reportada } = req.body;
  const newReporte = new Reporte({
    nombre,
    descripcion,
    publicacion_reportada
  });

  newReporte.save((err, reporte) => {
    if (err) {
      return res.status(400).send({ message: "Error al crear el reporte" });
    }
    return res.status(201).send(reporte);
  });
};

const getReporte = (req, res) => {
  Reporte.find({}, (err, reporte) => {
    if (err) {
      return res.status(400).send({ message: "Error al obtener el reporte" });
    }
    return res.status(200).send(reporte);
  });
};

const deleteReporte = (req, res) => {
  const { id } = req.params;
  Reporte.findByIdAndDelete(id, (err, reporte) => {
    if (err) {
      return res.status(400).send({ message: "Error al obtener el reporte" });
    }
    if(!reporte) {
      return res.status(404).send({ message: "reporte no encontrado" });
    }
    return res.status(200).send(reporte);
  });
};

module.exports = {
  createReporte,
  getReporte,
  deleteReporte
};
