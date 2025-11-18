import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Container & Zone API",
      version: "1.0.0",
      description: "API documentation for container/zone system"
    },
  },
  apis: ["./src/routes.js", "./src/containers/*.controller.js", "./src/zones/*.controller.js"],
};

const swaggerSpec = swaggerJsdoc(options);

export function swaggerDocs(app) {
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}
