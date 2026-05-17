/**
 * @swagger
 * tags:
 *   name: Pacientes
 *   description: API para gestión de categorías
 */

import { Router } from "express";
import { jwtGuard } from "../middleware/jwt";
import PacienteHandler from "../handler/PacienteHandler";
import PacienteUsecase from "../../../application/usecase/PacienteUsecase";
import Adapter from "../../adapter/postgres/paciente/adapter/Adapter";

const router = Router();
const handler = new PacienteHandler(
  new PacienteUsecase(new Adapter())
);

router.use(jwtGuard);

/**
 * @swagger
 * /pacientes:
 *   get:
 *     summary: Obtener todos los médicos
 *     tags: [Pacientes]
 *     responses:
 *       200:
 *         description: Lista de médicos obtenida exitosamente
 *       500:
 *         description: Error interno del servidor
 */
router.get("/", handler.getAll);

/**
 * @swagger
 * /pacientes/{id}:
 *   get:
 *     summary: Obtener un médico por ID
 *     tags: [Pacientes]
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
 * /pacientes:
 *   post:
 *     summary: Crear una nuevo médico
 *     tags: [Pacientes]
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
 * /pacientes:
 *   put:
 *     summary: Actualizar un médico
 *     tags: [Pacientes]
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
 * /pacientes/{id}:
 *   delete:
 *     summary: Eliminar un médico
 *     tags: [Pacientes]
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
 * /pacientes/login:
 *   post:
 *     summary: Iniciar sesión como paciente
 *     tags: [Pacientes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - identificacion
 *               - password
 *             properties:
 *               identificacion:
 *                 type: string
 *                 example: Radiología
 *               password:
 *                 type: string
 *                 example: 123456
 *     responses:
 *       200:
 *         description: Inicio de sesión exitoso
 *       401:
 *         description: credenciales invalidas
 *       500:
 *         description: Error interno del servidor
 */
router.post("/login", handler.login);

export default router;