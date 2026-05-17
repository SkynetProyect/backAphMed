/**
 * @swagger
 * tags:
 *   name: Procedimientos
 *   description: API para gestión de categorías
 */

import { Router } from "express";
import { jwtGuard } from "../middleware/jwt";
import ProcedimientoHandler from "../handler/ProcedimientoHandler";
import ProcedimientoUsecase from "../../../application/usecase/ProcedimientoUsecase";
import Adapter from "../../adapter/postgres/procedimiento/adapter/Adapter";

const router = Router();
const handler = new ProcedimientoHandler(
  new ProcedimientoUsecase(new Adapter())
);

router.use(jwtGuard);

/**
 * @swagger
 * /procedimientos:
 *   get:
 *     summary: Obtener todos los procedimientos
 *     tags: [Procedimientos]
 *     responses:
 *       200:
 *         description: Lista de procedimientos obtenida exitosamente
 *       500:
 *         description: Error interno del servidor
 */
router.get("/", handler.getAll);

/**
 * @swagger
 * /procedimientos/{id}:
 *   get:
 *     summary: Obtener un médico por ID
 *     tags: [Procedimientos]
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
 * /procedimientos:
 *   post:
 *     summary: Crear una nuevo médico
 *     tags: [Procedimientos]
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
 * /procedimientos:
 *   put:
 *     summary: Actualizar un médico
 *     tags: [Procedimientos]
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
 * /procedimientos/{id}:
 *   delete:
 *     summary: Eliminar un médico
 *     tags: [Procedimientos]
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

/**
 * @swagger
 * /procedimientos/paciente/{paciente_id}:
 *   get:
 *     summary: Obtener lista de procedimientos por id del paciente
 *     tags: [Procedimientos]
 *     parameters:
 *       - in: path
 *         name: paciente_id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del paciente
 *     responses:
 *       200:
 *         description: Procedimientos obtenidos exitosamente
 *       404:
 *         description: Procedimientos no encontrados
 *       500:
 *         description: Error interno del servidor
 */
router.get("/paciente/:paciente_id", handler.getByPaciente);
export default router;