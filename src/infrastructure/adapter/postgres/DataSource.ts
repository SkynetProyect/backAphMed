import "reflect-metadata";
import { DataSource } from "typeorm";
import * as dotenv from "dotenv";

dotenv.config();
// importa tus entidades
import Paciente from "../../../domain/paciente/model/Paciente";
import Doctor from "../../../domain/doctor/model/Doctor";
import Procedimiento from "../../../domain/procedimiento/model/Procedimiento";
import Imagen from "../../../domain/imagen/model/Imagen";
import Documento from "../../../domain/documento/model/Documento";
import Video from "../../../domain/video/model/Video";
import Categoria from "../../../domain/categoria/model/Categoria";
import Typecc from "../../../domain/tipocedula/model/Typecc";
import multer from "multer";

export const upload = multer({
  storage: multer.memoryStorage(),
});

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,

    ssl: true,

    extra: {
        ssl: {
            rejectUnauthorized: false,
        },
    },

    synchronize: true,
    logging: false,

    entities: [
        Categoria,
        Doctor,
        Documento,
        Imagen,
        Paciente,
        Procedimiento,
        Typecc,
        Video
    ],
});

