/**
 * @swagger
 * tags:
 *   name: Documentos
 *   description: API para gestión de categorías
 */

import { Router } from "express";
import DocumentoHandler from "../handler/DocumentoHandler";
import DocumentoUsecase from "../../../application/usecase/DocumentoUsecase";
import Adapter from "../../adapter/postgres/documento/adapter/Adapter";
import multer from 'multer';

const router = Router();
const upload = multer({ storage: multer.memoryStorage() });
const handler = new DocumentoHandler(
  new DocumentoUsecase(new Adapter())
);

/**
 * @swagger
 * /documentos:
 *   get:
 *     summary: Obtener todos los médicos
 *     tags: [Documentos]
 *     responses:
 *       200:
 *         description: Lista de médicos obtenida exitosamente
 *       500:
 *         description: Error interno del servidor
 */
router.get("/", handler.getAll);

/**
 * @swagger
 * /documentos/{id}:
 *   get:
 *     summary: Obtener un médico por ID
 *     tags: [Documentos]
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
 * /documentos:
 *   post:
 *     summary: Crear un nuevo documento
 *     tags: [Documentos]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - procedimiento_id
 *               - file
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: Documento de radiología
 *               procedimiento_id:
 *                 type: integer
 *                 example: 1
 *               file:
 *                 type: string
 *                 format: binary
 *                 description: Archivo del documento
 *     responses:
 *       201:
 *         description: Documento creado exitosamente
 *       400:
 *         description: Datos inválidos
 *       500:
 *         description: Error interno del servidor
 */
router.post("/", upload.single('file'), handler.create);

/**
 * @swagger
 * /documentos:
 *   put:
 *     summary: Actualizar un médico
 *     tags: [Documentos]
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
 * /documentos/{id}:
 *   delete:
 *     summary: Eliminar un médico
 *     tags: [Documentos]
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