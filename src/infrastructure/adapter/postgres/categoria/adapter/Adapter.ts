import CategoriaGateway from "../../../../../domain/categoria/gateway/CategoriaGateway";
import Categoria from "../../../../../domain/categoria/model/Categoria";
import { AppDataSource } from "../../DataSource";

export default class Adapter implements CategoriaGateway {
    private readonly repo = AppDataSource.getRepository(Categoria);

    async getAll(): Promise<Array<Categoria>> {
        return this.repo.find();
    }
    async getById(id: number): Promise<Categoria> {
        const objeto = await this.repo.findOneBy({ id });
        return objeto ?? new Categoria();
    }
    async create(categoria: Categoria): Promise<Categoria> {
        return this.repo.save(categoria);
    }
    async update(categoria: Categoria): Promise<Categoria> {
        return this.repo.save(categoria);
    }
    async delete(id: number): Promise<boolean> {
        await this.repo.delete(id);
        return true;
    }

}