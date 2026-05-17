import DocumentoGateway from "../../../../../domain/documento/gateway/DocumentoGateway";
import Documento from "../../../../../domain/documento/model/Documento";
import { AppDataSource } from "../../DataSource";

export default class Adapter implements DocumentoGateway {

    private readonly repo = AppDataSource.getRepository(Documento);

    async getAll(): Promise<Array<Documento>> {
        return this.repo.find();
    }
    async getById(id: number): Promise<Documento> {
        const objeto = await this.repo.findOneBy({ id });
        return objeto ?? new Documento();
    }
    async create(Documento: Documento): Promise<Documento> {
        return this.repo.save(Documento);
    }
    async update(Documento: Documento): Promise<Documento> {
        return this.repo.save(Documento);
    }
    async delete(id: number): Promise<boolean> {
        await this.repo.delete(id);
        return true;
    }
    async getByProcedimiento(procedimiento_id: number): Promise<Array<Documento>> {
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