const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const publicacionRoutes = require('./routes/publicacionRoutes');
const comentarioRoutes = require('./routes/comentarioRoutes');
const reporteRoutes = require('./routes/reporteRoutes');
const categoriaRoutes = require('./routes/categoriaRoutes');

app.listen(process.env.PORT, () => {
    console.log("El proyecto esta corriendo en el puerto => ", process.env.PORT);
});

app.use(cors());
app.use(express.json());
app.options("*", cors());
app.use('/api', publicacionRoutes);
app.use('/api', comentarioRoutes);
app.use('/api', reporteRoutes);
app.use('/api', categoriaRoutes);

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
