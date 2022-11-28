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

const getLikes = (req, res) => {
    Like.find ({}).populate({path: 'rut publicacion' }).exec( (err, like) => {
        if (err) {
            return res.status(400).send({ message: "Error al obtener los likes" });
        }
        return res.status(200).send(like);
    });
};

module.exports = {
    createlike,
    getLikes,
}