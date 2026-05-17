import PacienteGateway from "../../../../../domain/paciente/gateway/PacienteGateway";
import Paciente from "../../../../../domain/paciente/model/Paciente";
import { AppDataSource } from "../../DataSource";

export default class Adapter implements PacienteGateway {
    private readonly repo = AppDataSource.getRepository(Paciente);

    async getAll(): Promise<Array<Paciente>> {
        return this.repo.find();
    }
    async getById(id: number): Promise<Paciente> {
        const objeto = await this.repo.findOneBy({ id });
        return objeto ?? new Paciente();
    }
    async create(Paciente: Paciente): Promise<Paciente> {
        return this.repo.save(Paciente);
    }
    async update(Paciente: Paciente): Promise<Paciente> {
        return this.repo.save(Paciente);
    }
    async delete(id: number): Promise<boolean> {
        await this.repo.delete(id);
        return true;
    }

    async login(identificacion: string, password: string, is_doctor:boolean): Promise<Paciente>{
        const objeto = await this.repo.findOneBy({ identificacion: identificacion, clave: password, is_doctor:is_doctor });
        return objeto ?? new Paciente();
    };

}