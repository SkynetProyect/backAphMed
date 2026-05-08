/**
 * @swagger
 * tags:
 *   name: Typeccs
 *   description: API para gestión de categorías
 */

import { Router } from "express";
import TypeccHandler from "../handler/TypeccHandler";
import TypeccUsecase from "../../../application/usecase/TypeccUsecase";
import Adapter from "../../adapter/postgres/tipocedula/adapter/Adapter";

const router = Router();
const handler = new TypeccHandler(
  new TypeccUsecase(new Adapter())
);

/**
 * @swagger
 * /tipocedulas:
 *   get:
 *     summary: Obtener todos los médicos
 *     tags: [Typeccs]
 *     responses:
 *       200:
 *         description: Lista de médicos obtenida exitosamente
 *       500:
 *         description: Error interno del servidor
 */
router.get("/", handler.getAll);

/**
 * @swagger
 * /tipocedulas/{id}:
 *   get:
 *     summary: Obtener un médico por ID
 *     tags: [Typeccs]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del médico
 *     responses:
 *       200:
 *         description: Médico obtenido exitosamente
 *       404:
 *         description: Médico no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.get("/:id", handler.getById);




export default router;