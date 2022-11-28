const usuarioModel = require("../models/usuarioModel");

const createusuario = (req, res) => {
    const { rut } = req.body;
    const newUsuario = new Usuario({
        rut
    });

    newUsuario.save((err, usuario) => {
    if (err) {
        return res.status(400).send({ message: "Error al crear el usuario" });
    }
        return res.status(201).send(usuario);
    });
};