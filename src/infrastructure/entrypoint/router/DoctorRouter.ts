/**
 * @swagger
 * tags:
 *   name: Doctors
 *   description: API para gestión de categorías
 */

import { Router } from "express";
import { jwtGuard } from "../middleware/jwt";
import DoctorHandler from "../handler/DoctorHandler";
import DoctorUsecase from "../../../application/usecase/DoctorUsecase";
import Adapter from "../../adapter/postgres/doctor/adapter/Adapter";

const router = Router();
const handler = new DoctorHandler(
  new DoctorUsecase(new Adapter())
);

router.use(jwtGuard);

/**
 * @swagger
 * /doctores:
 *   get:
 *     summary: Obtener todos los médicos
 *     tags: [Doctors]
 *     responses:
 *       200:
 *         description: Lista de médicos obtenida exitosamente
 *       500:
 *         description: Error interno del servidor
 */
router.get("/", handler.getAll);

/**
 * @swagger
 * /doctores/{id}:
 *   get:
 *     summary: Obtener un médico por ID
 *     tags: [Doctors]
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
 * /doctores:
 *   post:
 *     summary: Crear una nuevo médico
 *     tags: [Doctors]
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
 * /doctores:
 *   put:
 *     summary: Actualizar un médico
 *     tags: [Doctors]
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
 * /doctores/{id}:
 *   delete:
 *     summary: Eliminar un médico
 *     tags: [Doctors]
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