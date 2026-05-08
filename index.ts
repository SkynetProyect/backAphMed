import "reflect-metadata";
import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./src/infrastructure/entrypoint/middleware/swagger";
import categoriaRouter from "./src/infrastructure/entrypoint/router/CategoriaRouter";
import doctorRouter from "./src/infrastructure/entrypoint/router/DoctorRouter";
import documentoRouter from "./src/infrastructure/entrypoint/router/DocumentoRouter";
import imagenRouter from "./src/infrastructure/entrypoint/router/ImagenRouter";
import pacienteRouter from "./src/infrastructure/entrypoint/router/PacienteRouter";
import procedimientoRouter from "./src/infrastructure/entrypoint/router/ProcedimientoRouter";
import typeccRouter from "./src/infrastructure/entrypoint/router/TypeccRouter";
import videoRouter from "./src/infrastructure/entrypoint/router/VideoRouter";
import { AppDataSource } from "./src/infrastructure/adapter/postgres/DataSource";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/apidocs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/categorias", categoriaRouter);
app.use("/doctores", doctorRouter);
app.use("/documentos", documentoRouter);
app.use("/imagenes", imagenRouter);
app.use("/pacientes", pacienteRouter);
app.use("/procedimientos", procedimientoRouter);
app.use("/tipocedulas", typeccRouter);
app.use("/videos", videoRouter);

AppDataSource.initialize()
    .then(() => {
        console.log("DB conectada correctamente");

        app.listen(3000, () => {
            console.log("API corriendo en http://localhost:3000");
        });
    })
    .catch((error) => {
        console.error("Error conectando DB:", error);
    });