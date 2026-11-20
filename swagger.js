import swaggerAutogen from "swagger-autogen";

const doc = {
  openapi: "3.0.0",
  info: {
    title: "Task Manager API",
    version: "1.0.0",
    description: "API de gestion des tâches et de l'authentification",
  },
  servers: [
    {
      url: "http://localhost:5000",
      description: "Serveur local",
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
        description: "Entrez votre token JWT généré lors du login",
      },
    },
  },
};

const outputFile = "./swagger.json";
const routes = ["./app.js"];

swaggerAutogen({ openapi: "3.0.0" })(outputFile, routes, doc);

