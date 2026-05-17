import Paciente from "../model/Paciente";

export default interface PacienteGateway{
    getAll(): Promise<Array<Paciente>>;
    getById(id: number): Promise<Paciente>;
    create(Paciente: Paciente): Promise<Paciente>;
    update(Paciente: Paciente): Promise<Paciente>;
    delete(id: number): Promise<boolean>;
    login(identificacion: string, password: string): Promise<Paciente>;
}