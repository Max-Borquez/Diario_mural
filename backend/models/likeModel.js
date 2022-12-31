const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const LikeSchema = new Schema({
    rut: {
        type: Schema.ObjectId,
        ref: "usario"
    },
    publicacion:{
        type: Schema.ObjectId,
        ref : "publicacion"
    }
})

module.exports = mongoose.model("like", LikeSchema);