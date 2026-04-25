// @ts-ignore
import swaggerJsdoc from "swagger-jsdoc";

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API Clinica",
            version: "1.0.0",
            description: "Documentación de la API",
        },
        servers: [
            {
                url: "http://localhost:3000",
            },
        ],
    },
    apis: ["./src/infrastructure/entrypoint/router/*.ts"], // 👈 donde están tus rutas
};

export const swaggerSpec = swaggerJsdoc(options);