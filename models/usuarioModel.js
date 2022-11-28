const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const usiaroSchema = new Schema({
    rut: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model("usuario", usuarioSchema);