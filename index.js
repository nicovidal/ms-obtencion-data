const express = require("express");
const { dbConnection } = require("./database/config");
require("dotenv").config();
const swaggerSetup = require("./swagger");
const cors = require("cors");
const OpenApiValidator = require('express-openapi-validator');
const path = require('path');

// Server Express
const app = express();

// Conectar a la BD
dbConnection();

// Leer y parsear el body
app.use(express.json());

// Swagger UI
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load(path.join(__dirname, 'api/openapi.yml'));
// Swagger Docs
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// OpenAPI Validator: RUTEO AUTOMÁTICO
app.use(
  OpenApiValidator.middleware({
    apiSpec: path.join(__dirname, 'api/openapi.yml'), 
    operationHandlers: path.join(__dirname, './controllers'),
  })
  
);

app.use(cors({
    origin: "*", 
    methods: ["GET", "POST", "PUT", "DELETE"], 
    allowedHeaders: ["Content-Type", "Authorization"] 
  }));

// Configurar Swagger
swaggerSetup(app);

// Escuchar peticiones
app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
  console.log("Documentación en: http://localhost:" + process.env.PORT + "/ms-obtencion-data");
});
