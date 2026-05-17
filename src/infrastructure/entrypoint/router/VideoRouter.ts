/**
 * @swagger
 * tags:
 *   name: Videos
 *   description: API para gestión de categorías
 */

import { Router } from "express";
import VideoHandler from "../handler/VideoHandler";
import VideoUsecase from "../../../application/usecase/VideoUsecase";
import Adapter from "../../adapter/postgres/video/adapter/Adapter";

const router = Router();
const handler = new VideoHandler(
  new VideoUsecase(new Adapter())
);

/**
 * @swagger
 * /videos:
 *   get:
 *     summary: Obtener todos los médicos
 *     tags: [Videos]
 *     responses:
 *       200:
 *         description: Lista de médicos obtenida exitosamente
 *       500:
 *         description: Error interno del servidor
 */
router.get("/", handler.getAll);

/**
 * @swagger
 * /videos/{id}:
 *   get:
 *     summary: Obtener un médico por ID
 *     tags: [Videos]
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

/**
 * @swagger
 * /videos:
 *   post:
 *     summary: Crear una nuevo médico
 *     tags: [Videos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nombre
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: Radiología
 *     responses:
 *       201:
 *         description: Médico creado exitosamente
 *       400:
 *         description: Datos inválidos
 *       500:
 *         description: Error interno del servidor
 */
router.post("/", handler.create);

/**
 * @swagger
 * /videos:
 *   put:
 *     summary: Actualizar un médico
 *     tags: [Videos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nombre
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: Cardiología
 *     responses:
 *       200:
 *         description: Médico actualizado exitosamente
 *       400:
 *         description: Datos inválidos
 *       404:
 *         description: Médico no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.put("/:id", handler.update);

/**
 * @swagger
 * /videos/{id}:
 *   delete:
 *     summary: Eliminar un médico
 *     tags: [Videos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del médico
 *     responses:
 *       200:
 *         description: Médico eliminado exitosamente
 *       404:
 *         description: Médico no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.delete("/:id", handler.delete);

router.get("/byProcedimiento/:id", handler.getByProcedimiento)
export default router;