import { Request, Response as ExpressResponse } from "express";
import VideoUsecase from "../../../application/usecase/VideoUsecase";
import Response from "../dto/Response";
import { validate } from "class-validator";
import { plainToInstance } from "class-transformer";
import { VideoDto } from "../dto/VideoDto";

export default class VideoHandler {

    constructor(private readonly usecase: VideoUsecase) {}

    getAll = async (req: Request, res: ExpressResponse) => {
        try {
            const data = await this.usecase.getAll();
            res.json(new Response(200, "Videos obtenidas exitosamente", data));
        } catch (error) {
            res.json(new Response(500, error as string, null));
        }
    };

    getById = async (req: Request, res: ExpressResponse) => {
        try {
            const id = Number(req.params.id);
            const data = await this.usecase.getById(id);

            res.json(new Response(200, "Video obtenida exitosamente", data));
        } catch (error) {
            res.json(new Response(500, error as string, null));
        }
    };
    
    create = async (req: Request, res: ExpressResponse) => {
        try {
            const dto = plainToInstance(VideoDto, req.body);
            const errors = await validate(dto);
            if (errors.length > 0) {
                res.status(400).json(new Response(400, "Datos de entrada inválidos", errors));
                return;
            }
            const data = await this.usecase.create(dto);
            res.status(201).json(new Response(201, "Video creada exitosamente", data));
        } catch (error) {
            res.json(new Response(500, error as string, null));
        }
    };

    update = async (req: Request, res: ExpressResponse) => {
        try {
            const dto = plainToInstance(VideoDto, req.body);
            const errors = await validate(dto);
            if (errors.length > 0) {
                res.status(400).json(new Response(400, "Datos de entrada inválidos", errors));
                return;
            }
            const data = await this.usecase.update(dto);
            res.json(new Response(200, "Video actualizada exitosamente", data));
        } catch (error) {
            res.json(new Response(500, error as string, null));
        }
    };
    

    delete = async (req: Request, res: ExpressResponse) => {
        try {
            const id = Number(req.params.id);
            const result = await this.usecase.delete(id);

            res.json(new Response(200, "Video eliminada exitosamente", result));
        } catch (error) {
            res.json(new Response(500, error as string, null));
        }
    };

    getByProcedimiento = async (req: Request, res: ExpressResponse) => {
        try {
            const procedimiento_id = Number(req.params.id);
            const data = await this.usecase.getByProcedimiento(procedimiento_id);

            res.json(new Response(200, "Videos obtenidas exitosamente", data));
        } catch (error) {
            res.json(new Response(500, error as string, null));
        }
    }

}