const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const path = require("path");

module.exports = (app) => {
  const swaggerDocument = YAML.load(path.join(__dirname, "api/openapi.yml"));

  // 🔹 Ruta donde se servirá la documentación Swagger
  app.use("/ms-obtencion-data", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
};
