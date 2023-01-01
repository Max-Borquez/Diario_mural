import axios from 'axios'

const getPublicaciones = async () => {
    const response = await axios.get(`${process.env.SERVIDOR}/publicaciones`);
    return response
};

const createPublicacion = async (publicacion) => {
    //console.log("console log de post", publicacion)
    const response = await axios.post(`${process.env.SERVIDOR}/publicacion`, publicacion);
    return response

}

module.exports = {
    getPublicaciones,
    createPublicacion
}