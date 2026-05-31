import { PaginatedResult } from "../../pagination/PaginatedResult";
import Paciente from "../model/Paciente";

export default interface PacienteGateway{
    getAll(page: number, pageSize: number): Promise<PaginatedResult<Paciente>>;
    getById(id: number): Promise<Paciente>;
    create(Paciente: Paciente): Promise<Paciente>;
    update(Paciente: Paciente): Promise<Paciente>;
    delete(id: number): Promise<boolean>;
    login(identificacion: string, password: string, is_doctor:boolean): Promise<Paciente>;
}