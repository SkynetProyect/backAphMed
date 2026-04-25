import DoctorGateway from "../../domain/doctor/gateway/DoctorGateway";
import Doctor from "../../domain/doctor/model/Doctor";

export default class DoctorUsecase {
    private readonly gateway: DoctorGateway;

    constructor(gateway: DoctorGateway) {
        this.gateway = gateway;
    }

    public getAll(): Promise<Array<Doctor>> {
        return this.gateway.getAll();
    }

    public getById(id: number): Promise<Doctor> {
        return this.gateway.getById(id);
    }

    public create(Doctor: Doctor): Promise<Doctor> {
        return this.gateway.create(Doctor);
    }

    public update(Doctor: Doctor): Promise<Doctor> {
        return this.gateway.update(Doctor);
    }

    public delete(id: number): Promise<boolean> {
        return this.gateway.delete(id);
    }
}