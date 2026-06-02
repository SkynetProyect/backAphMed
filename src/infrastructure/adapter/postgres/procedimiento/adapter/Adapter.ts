import Documento from "../../../../../domain/documento/model/Documento";
import Imagen from "../../../../../domain/imagen/model/Imagen";
import ProcedimientoGateway from "../../../../../domain/procedimiento/gateway/ProcedimientoGateway";
import Procedimiento from "../../../../../domain/procedimiento/model/Procedimiento";
import Video from "../../../../../domain/video/model/Video";
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
        const repoimage = AppDataSource.getRepository(Imagen); 
        const repovideo = AppDataSource.getRepository(Video);
        const repodocumento = AppDataSource.getRepository(Documento);
        await repoimage.delete({ procedimiento_id: id });
        await repovideo.delete({ procedimiento_id: id });
        await repodocumento.delete({ procedimiento_id: id });
        await this.repo.delete(id);
        return true;
    }
    async getByPaciente(paciente_id: number): Promise<Array<Procedimiento>>{
            return this.repo.findBy({ paciente_id: paciente_id });
    };

}