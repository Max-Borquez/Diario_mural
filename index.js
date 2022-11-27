const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


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
<<<<<<< HEAD
=======
app.use('/api', publicacionRoutes);
app.use('/api', comentarioRoutes);
app.use('/api', reporteRoutes);
app.use('/api', categoriaRoutes);
>>>>>>> 93890319c041e5b5c0641a983bf4a86ff14cfc0f

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
