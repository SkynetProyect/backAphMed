/**
 * @swagger
 * tags:
 *   name: Imagens
 *   description: API para gestión de categorías
 */

import { Router } from "express";
import ImagenHandler from "../handler/ImagenHandler";
import ImagenUsecase from "../../../application/usecase/ImagenUsecase";
import Adapter from "../../adapter/postgres/imagen/adapter/Adapter";

const router = Router();
const handler = new ImagenHandler(
  new ImagenUsecase(new Adapter())
);

/**
 * @swagger
 * /imagenes:
 *   get:
 *     summary: Obtener todos los médicos
 *     tags: [Imagens]
 *     responses:
 *       200:
 *         description: Lista de médicos obtenida exitosamente
 *       500:
 *         description: Error interno del servidor
 */
router.get("/", handler.getAll);

/**
 * @swagger
 * /imagenes/{id}:
 *   get:
 *     summary: Obtener un médico por ID
 *     tags: [Imagens]
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
 * /imagenes:
 *   post:
 *     summary: Crear una nuevo médico
 *     tags: [Imagens]
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
 * /imagenes:
 *   put:
 *     summary: Actualizar un médico
 *     tags: [Imagens]
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
 * /imagenes/{id}:
 *   delete:
 *     summary: Eliminar un médico
 *     tags: [Imagens]
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

export default router;