const reporte = require("../models/reporteModel");

const createReporte = (req, res) => {
const { nombre, descripcion} = req.body;
const newReporte = new reporte({
    nombre,
    descripcion
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

module.exports = {
createReporte,
getReporte,
};