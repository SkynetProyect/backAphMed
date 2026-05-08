import { Request, Response as ExpressResponse } from "express";
import DoctorUsecase from "../../../application/usecase/DoctorUsecase";
import Response from "../dto/Response";
import { validate } from "class-validator";
import { plainToInstance } from "class-transformer";
import { DoctorDto } from "../dto/DoctorDto";

export default class DoctorHandler {

    constructor(private readonly usecase: DoctorUsecase) {}

    getAll = async (req: Request, res: ExpressResponse) => {
        try {
            const data = await this.usecase.getAll();
            res.json(new Response(200, "Doctors obtenidas exitosamente", data));
        } catch (error) {
            res.json(new Response(500, error as string, null));
        }
    };

    getById = async (req: Request, res: ExpressResponse) => {
        try {
            const id = Number(req.params.id);
            const data = await this.usecase.getById(id);

            res.json(new Response(200, "Doctor obtenida exitosamente", data));
        } catch (error) {
            res.json(new Response(500, error as string, null));
        }
    };

    create = async (req: Request, res: ExpressResponse) => {
        try {
            const dto = plainToInstance(DoctorDto, req.body);
            const errors = await validate(dto);
            if (errors.length > 0) {
                res.status(400).json(new Response(400, "Datos de entrada inválidos", errors));
                return;
            }
            const data = await this.usecase.create(dto);
            res.status(201).json(new Response(201, "Doctor creada exitosamente", data));
        } catch (error) {
            res.json(new Response(500, error as string, null));
        }
    };

    update = async (req: Request, res: ExpressResponse) => {
        try {
            const dto = plainToInstance(DoctorDto, req.body);
            const errors = await validate(dto);
            if (errors.length > 0) {
                res.status(400).json(new Response(400, "Datos de entrada inválidos", errors));
                return;
            }
            const data = await this.usecase.update(dto);
            res.json(new Response(200, "Doctor actualizada exitosamente", data));
        } catch (error) {
            res.json(new Response(500, error as string, null));
        }
    };

    delete = async (req: Request, res: ExpressResponse) => {
        try {
            const id = Number(req.params.id);
            const result = await this.usecase.delete(id);

            res.json(new Response(200, "Doctor eliminada exitosamente", result));
        } catch (error) {
            res.json(new Response(500, error as string, null));
        }
    };
}