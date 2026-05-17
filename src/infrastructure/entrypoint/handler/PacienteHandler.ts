import { Request, Response as ExpressResponse } from "express";
import jwt from "jsonwebtoken";
import PacienteUsecase from "../../../application/usecase/PacienteUsecase";
import Response from "../dto/Response";
import { validate } from "class-validator";
import { plainToInstance } from "class-transformer";
import { PacienteDto } from "../dto/PacienteDto";

const JWT_SECRET = process.env.JWT_SECRET || "default_jwt_secret";

export default class PacienteHandler {

    constructor(private readonly usecase: PacienteUsecase) {}

    getAll = async (req: Request, res: ExpressResponse) => {
        try {
            const data = await this.usecase.getAll();
            res.json(new Response(200, "Pacientes obtenidas exitosamente", data));
        } catch (error) {
            res.json(new Response(500, error as string, null));
        }
    };

    getById = async (req: Request, res: ExpressResponse) => {
        try {
            const id = Number(req.params.id);
            const data = await this.usecase.getById(id);

            res.json(new Response(200, "Paciente obtenida exitosamente", data));
        } catch (error) {
            res.json(new Response(500, error as string, null));
        }
    };

    create = async (req: Request, res: ExpressResponse) => {
        try {
            const dto = plainToInstance(PacienteDto, req.body);
            const errors = await validate(dto);
            if (errors.length > 0) {
                res.status(400).json(new Response(400, "Datos de entrada inválidos", errors));
                return;
            }
            const data = await this.usecase.create(dto);
            res.status(201).json(new Response(201, "Paciente creada exitosamente", data));
        } catch (error) {
            res.json(new Response(500, error as string, null));
        }
    };

    update = async (req: Request, res: ExpressResponse) => {
        try {
            const dto = plainToInstance(PacienteDto, req.body);
            const errors = await validate(dto);
            if (errors.length > 0) {
                res.status(400).json(new Response(400, "Datos de entrada inválidos", errors));
                return;
            }
            const data = await this.usecase.update(dto);
            res.json(new Response(200, "Paciente actualizada exitosamente", data));
        } catch (error) {
            res.json(new Response(500, error as string, null));
        }
    };

    delete = async (req: Request, res: ExpressResponse) => {
        try {
            const id = Number(req.params.id);
            const result = await this.usecase.delete(id);

            res.json(new Response(200, "Paciente eliminada exitosamente", result));
        } catch (error) {
            res.json(new Response(500, error as string, null));
        }
    };

    login = async (req: Request, res: ExpressResponse) => {
        try {
            const { identificacion, password } = req.body;
            const data = await this.usecase.login(identificacion, password);
            if (data.id) {
                const token = jwt.sign({ id: data.id, identificacion: data.identificacion }, JWT_SECRET, { expiresIn: "1h" });
                res.json(new Response(200, "Login exitoso", { paciente: data, token }));
            } else {
                res.status(401).json(new Response(401, "Credenciales inválidas", null));
            }
        } catch (error) {
            res.json(new Response(500, error as string, null));
        }
    };}