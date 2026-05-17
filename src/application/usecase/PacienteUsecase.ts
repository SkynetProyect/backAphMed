import PacienteGateway from "../../domain/paciente/gateway/PacienteGateway";
import Paciente from "../../domain/paciente/model/Paciente";

export default class PacienteUsecase {
    private readonly gateway: PacienteGateway;

    constructor(gateway: PacienteGateway) {
        this.gateway = gateway;
    }

    public getAll(): Promise<Array<Paciente>> {
        return this.gateway.getAll();
    }

    public getById(id: number): Promise<Paciente> {
        return this.gateway.getById(id);
    }

    public create(Paciente: Paciente): Promise<Paciente> {
        return this.gateway.create(Paciente);
    }

    public update(Paciente: Paciente): Promise<Paciente> {
        return this.gateway.update(Paciente);
    }

    public delete(id: number): Promise<boolean> {
        return this.gateway.delete(id);
    }
    public login(identificacion: string, password: string): Promise<Paciente> {
        return this.gateway.login(identificacion, password);
    }
}