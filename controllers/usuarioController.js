const usuarioModel = require("../models/usuarioModel");

const createUsuario = ( req, res) => {
    const { rut } = req.body;
    const newUsuario = new Usuario({
        rut
    });

    newUsuario.save((err, Usuario) => {
    if (err) {
        return res.status(400).send({ message: "Error al crear el usuario" });
    }
        return res.status(201).send(Usuario);
    });
};

const getUsuarios = (req, res) => {
    Usuario.find({}, (err, Usuario) => {
        if (err) {
            return res.status(400).send({ message: "Error al obtener los usuarios" });
        }
        return res.status(200).send(Usuario);
    });
};

module.exports = {
    createUsuario,
    getUsuarios,
}