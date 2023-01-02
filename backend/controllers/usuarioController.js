const Usuario = require("../models/usuarioModel");

const createUsuario = ( req, res) => {
    const { rut } = req.body;
    const newUsuario = new Usuario({
        rut,
    });

    newUsuario.save((err, usuario) => {
    if (err) {
        return res.status(400).send({ message: "Error al crear el usuario" });
    }
        return res.status(201).send(usuario);
    });
};

const getUsuarios = (req, res) => {
    Usuario.find({}, (err, usuario) => {
        if (err) {
            return res.status(400).send({ message: "Error al obtener los usuarios" });
        }
        return res.status(200).send(usuario);
    });
};

const deleteUsuario = (req, res) => {
    const { id } = req.params;
    Usuario.findByIdAndDelete(id, (err, usuario) => {
      if (err) {
        return res.status(400).send({ message: "Error al obtener el usuario" });
      }
      if(!usuario) {
        return res.status(404).send({ message: "Usuario no encontrado" });
      }
      return res.status(200).send(usuario);
    });
  };

module.exports = {
    createUsuario,
    getUsuarios,
    deleteUsuario
};