const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const likeSchema = new Schema({
    rut: {
        type: Schema.ObjectId,
        ref: "usario"
    },
    publicacion:{
        type: Schema.ObjectId,
        ref : "publicacion"
    }
})