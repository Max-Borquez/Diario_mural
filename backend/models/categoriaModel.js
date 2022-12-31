const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const CategoriaSchema = new Schema({
    nombre: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('categoria', CategoriaSchema);