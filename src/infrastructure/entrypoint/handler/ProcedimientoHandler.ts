import { Request, Response as ExpressResponse } from "express";
import ProcedimientoUsecase from "../../../application/usecase/ProcedimientoUsecase";
import Response from "../dto/Response";
import { validate } from "class-validator";
import { plainToInstance } from "class-transformer";
import { ProcedimientoDto } from "../dto/ProcedimientoDto";
import Procedimiento from "../../../domain/procedimiento/model/Procedimiento";
import Categoria from "../../../domain/categoria/model/Categoria";
import Paciente from "../../../domain/paciente/model/Paciente";

export default class ProcedimientoHandler {

    constructor(private readonly usecase: ProcedimientoUsecase) {}

    private mapDtoToProcedimiento(dto: ProcedimientoDto): Procedimiento {
        const procedimiento = new Procedimiento();
        if (dto.id !== undefined) {
            procedimiento.id = dto.id;
        }
        procedimiento.nombre = dto.nombre;
        procedimiento.categoria_id = dto.categoria_id;
        procedimiento.descripcion = dto.descripcion;
        procedimiento.paciente_id = dto.paciente_id;
        return procedimiento;
    }

    getAll = async (req: Request, res: ExpressResponse) => {
        try {
            const data = await this.usecase.getAll();
            
            console.log(data);
            console.info(data);
            res.json(new Response(200, "Procedimientos obtenidas exitosamente", data));
        } catch (error) {
            res.json(new Response(500, error as string, null));
        }
    };

    getById = async (req: Request, res: ExpressResponse) => {
        try {
            const id = Number(req.params.id);
            const data = await this.usecase.getById(id);

            res.json(new Response(200, "Procedimiento obtenida exitosamente", data));
        } catch (error) {
            res.json(new Response(500, error as string, null));
        }
    };

    create = async (req: Request, res: ExpressResponse) => {
        try {
            const dto = plainToInstance(ProcedimientoDto, req.body);
            const errors = await validate(dto);
            if (errors.length > 0) {
                res.status(400).json(new Response(400, "Datos de entrada inválidos", errors));
                return;
            }
            const procedimiento = this.mapDtoToProcedimiento(dto);
            const data = await this.usecase.create(procedimiento);
            res.status(201).json(new Response(201, "Procedimiento creada exitosamente", data));
        } catch (error) {
            res.json(new Response(500, error as string, null));
        }
    };

    update = async (req: Request, res: ExpressResponse) => {
        try {
            const dto = plainToInstance(ProcedimientoDto, req.body);
            const errors = await validate(dto);
            if (errors.length > 0) {
                res.status(400).json(new Response(400, "Datos de entrada inválidos", errors));
                return;
            }
            const procedimiento = this.mapDtoToProcedimiento(dto);
            const data = await this.usecase.update(procedimiento);
            res.json(new Response(200, "Procedimiento actualizada exitosamente", data));
        } catch (error) {
            res.json(new Response(500, error as string, null));
        }
    };

    delete = async (req: Request, res: ExpressResponse) => {
        try {
            const id = Number(req.params.id);
            const result = await this.usecase.delete(id);

            res.json(new Response(200, "Procedimiento eliminada exitosamente", result));
        } catch (error) {
            res.json(new Response(500, error as string, null));
        }
    };

    getByPaciente = async (req: Request, res: ExpressResponse) => {
        try {
            const paciente_id = Number(req.params.paciente_id);
            const data = await this.usecase.getByPaciente(paciente_id);

            res.json(new Response(200, "Procedimientos obtenidos exitosamente", data));
        } catch (error) {
            res.json(new Response(500, error as string, null));
        }
    }
}