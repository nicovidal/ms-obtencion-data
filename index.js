const express = require("express");
const { dbConnection } = require("./database/config");
require("dotenv").config();
const swaggerSetup = require("./swagger");
const cors = require("cors");

// Server Express
const app = express();

// Conectar a la BD
dbConnection();

// Leer y parsear el body
app.use(express.json());


app.use(cors({
    origin: "*", 
    methods: ["GET", "POST", "PUT", "DELETE"], 
    allowedHeaders: ["Content-Type", "Authorization"] 
  }));
// Configurar rutas
app.use("/api/data", require("./routes/persona"));
app.use("/api/data", require("./routes/deuda"));
app.use("/api/data", require("./routes/tipoPersona"));
app.use("/api/data", require("./routes/score"));
app.use("/api/data", require("./routes/cotizacion"));

// Configurar Swagger
swaggerSetup(app);
// Escuchar peticiones
app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
  console.log("Documentación en: http://localhost:" + process.env.PORT + "/ms-obtencion-data");
});
