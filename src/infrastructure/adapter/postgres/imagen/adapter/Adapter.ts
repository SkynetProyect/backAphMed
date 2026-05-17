import ImagenGateway from "../../../../../domain/imagen/gateway/ImagenGateway";
import Imagen from "../../../../../domain/imagen/model/Imagen";
import { AppDataSource } from "../../DataSource";

export default class Adapter implements ImagenGateway {
    private readonly repo = AppDataSource.getRepository(Imagen);

    async getAll(): Promise<Array<Imagen>> {
        return this.repo.find();
    }
    async getById(id: number): Promise<Imagen> {
        const objeto = await this.repo.findOneBy({ id });
        return objeto ?? new Imagen();
    }
    async create(Imagen: Imagen): Promise<Imagen> {
        return this.repo.save(Imagen);
    }
    async update(Imagen: Imagen): Promise<Imagen> {
        return this.repo.save(Imagen);
    }
    async delete(id: number): Promise<boolean> {
        await this.repo.delete(id);
        return true;
    }

    async getByProcedimiento(procedimiento_id: number): Promise<Array<Imagen>> {
        return this.repo.findBy({ procedimiento_id });
    }

    async deleteByProcedimiento(procedimiento_id:number): Promise<boolean>{
        try {

            const objetos = await this.repo.findBy({
                procedimiento_id
            });

            for (const objeto of objetos) {

                await this.repo.delete(objeto.id!);

            }

            return true;

        } catch (error) {

            console.error(error);

            return false;

        }

    }

}