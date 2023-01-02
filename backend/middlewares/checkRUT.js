const Usuario = require('../models/usuarioModel');

const checkRUT = (req, res, next) => {
    Usuario.findOne({_id: req.body.rut }, (err, usuario) => {
        if(err){
            return res.status(400).send({message: "Error al obtener el usuario "});
        }
        if(!usuario){
            return res.status(404).send({message: "El usuario no existe"});
        }
        return res.status(200).send({message: "Usuario logeado correctamente", rol: "administrador"})
    })
}

module.exports = checkRUT;