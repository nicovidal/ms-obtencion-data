const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerDocument = YAML.load("./api/openapi.yml");

module.exports = (app) => {
  app.use("/ms-obtencion-data", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

};
