import ProcedimientoGateway from "../../../../../domain/procedimiento/gateway/ProcedimientoGateway";
import Procedimiento from "../../../../../domain/procedimiento/model/Procedimiento";
import { AppDataSource } from "../../DataSource";

export default class Adapter implements ProcedimientoGateway {
    private readonly repo = AppDataSource.getRepository(Procedimiento);

    async getAll(): Promise<Array<Procedimiento>> {
        return this.repo.find();
    }
    async getById(id: number): Promise<Procedimiento> {
        const objeto = await this.repo.findOneBy({ id });
        return objeto ?? new Procedimiento();
    }
    async create(Procedimiento: Procedimiento): Promise<Procedimiento> {
        return this.repo.save(Procedimiento);
    }
    async update(Procedimiento: Procedimiento): Promise<Procedimiento> {
        return this.repo.save(Procedimiento);
    }
    async delete(id: number): Promise<boolean> {
        await this.repo.delete(id);
        return true;
    }
    async getByPaciente(paciente_id: number): Promise<Array<Procedimiento>>{
            return this.repo.findBy({ paciente_id: paciente_id });
    };

}