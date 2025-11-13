const express = require("express");
const { dbConnection } = require("./database/config");
require("dotenv").config();
const cors = require("cors");
const OpenApiValidator = require("express-openapi-validator");
const path = require("path");

// Swagger config (archivo aparte)
const swaggerSetup = require("./swagger");

const app = express();

//  Conectar a la BD
dbConnection();

//  Middlewares
app.use(express.json());
app.use(cors({ origin:  ["https://api.devnico.cl", "http://localhost:8080"], methods: ["GET", "POST", "PUT", "DELETE"] }));

//  Swagger
swaggerSetup(app);

// OpenAPI Validator (después de Swagger)
app.use(
  OpenApiValidator.middleware({
    apiSpec: path.join(__dirname, "api/openapi.yml"),
    validateRequests: true,
    validateResponses: false,
    operationHandlers: path.join(__dirname, "./controllers"),
  })
);

//  Error handler
app.use((err, req, res, next) => {
  console.error(err);
  if (err.status) {
    res.status(err.status).json({ error: err.message });
  } else {
    res.status(500).json({ error: "Error interno del servidor" });
  }
});

//  Iniciar servidor
app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
  console.log(
    `Swagger disponible en: http://localhost:${process.env.PORT}/ms-obtencion-data`
  );
});
