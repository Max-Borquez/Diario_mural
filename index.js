const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


const app = express();
const publicacionRoutes = require('./routes/publicacionRoutes');
const comentarioRoutes = require('./routes/comentarioRoutes');

app.listen(process.env.PORT, () => {
    console.log("El proyecto esta corriendo en el puerto => ", process.env.PORT);
});

app.use(cors());
app.use(express.json());
app.options("*", cors());

mongoose.set("useFindAndModify", false);
mongoose.set("useNewUrlParser", true);
mongoose.set("useCreateIndex", true);
mongoose.set("useUnifiedTopology", true);

mongoose.connect(process.env.DB, (err) => {
    if (err) {
        return console.log("Error al conectar con la base de datos", err);
    }
    return console.log("Conectado a la base de datos");
});
