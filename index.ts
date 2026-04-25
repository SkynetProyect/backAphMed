import "reflect-metadata";
import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./src/infrastructure/entrypoint/middleware/swagger";
import categoriaRouter from "./src/infrastructure/entrypoint/router/CategoriaRouter";
import { AppDataSource } from "./src/infrastructure/adapter/postgres/DataSource";

const app = express();

// ✅ CORS abierto para todos
app.use(cors());

// ✅ Parseo JSON
app.use(express.json());

// 🔗 rutas
app.use("/apidocs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/categorias", categoriaRouter);

// 🚀 Inicializar DB y luego levantar servidor
AppDataSource.initialize()
    .then(() => {
        console.log("🔥 DB conectada correctamente");

        app.listen(3000, () => {
            console.log("🚀 API corriendo en http://localhost:3000");
        });
    })
    .catch((error) => {
        console.error("❌ Error conectando DB:", error);
    });