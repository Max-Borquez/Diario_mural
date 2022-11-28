const likeModel = require("../models/likeModel");

const createlike = (req, res) => {
    const { rut,publicacion } = req.body;
    const newLike = new Like({
        rut,
        publicacion
    });

    newLike.save((err, like) => {
    if (err) {
        return res.status(400).send({ message: "Error al crear el usuario" });
    }
        return res.status(201).send(like);
    });
};