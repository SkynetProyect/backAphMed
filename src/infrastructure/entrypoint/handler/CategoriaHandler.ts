import { Request, Response as ExpressResponse } from "express";
import CategoriaUsecase from "../../../application/usecase/CategoriaUsecase";
import Response from "../dto/Response";

export default class CategoriaHandler {

    constructor(private readonly usecase: CategoriaUsecase) {}

    // 🔹 GET /categorias
    getAll = async (req: Request, res: ExpressResponse) => {
        try {
            const data = await this.usecase.getAll();
            res.json(new Response(200, "Categorias obtenidas exitosamente", data));
        } catch (error) {
            res.json(new Response(500, error as string, null));
        }
    };

    // 🔹 GET /categorias/:id
    getById = async (req: Request, res: ExpressResponse) => {
        try {
            const id = Number(req.params.id);
            const data = await this.usecase.getById(id);

            res.json(new Response(200, "Categoria obtenida exitosamente", data));
        } catch (error) {
            res.json(new Response(500, error as string, null));
        }
    };

    // 🔹 POST /categorias
    create = async (req: Request, res: ExpressResponse) => {
        try {
            const data = await this.usecase.create(req.body);
            res.status(201).json(new Response(201, "Categoria creada exitosamente", data));
        } catch (error) {
            res.json(new Response(500, error as string, null));
        }
    };

    // 🔹 PUT /categorias/:id
    update = async (req: Request, res: ExpressResponse) => {
        try {
            const data = await this.usecase.update({ ...req.body});

            res.json(new Response(200, "Categoria actualizada exitosamente", data));
        } catch (error) {
            res.json(new Response(500, error as string, null));
        }
    };

    // 🔹 DELETE /categorias/:id
    delete = async (req: Request, res: ExpressResponse) => {
        try {
            const id = Number(req.params.id);
            const result = await this.usecase.delete(id);

            res.json(new Response(200, "Categoria eliminada exitosamente", result));
        } catch (error) {
            res.json(new Response(500, error as string, null));
        }
    };
}