import DoctorGateway from "../../../../../domain/doctor/gateway/DoctorGateway";
import Doctor from "../../../../../domain/doctor/model/Doctor";
import { AppDataSource } from "../../DataSource";

export default class Adapter implements DoctorGateway {
    private readonly repo = AppDataSource.getRepository(Doctor);

    async getAll(): Promise<Array<Doctor>> {
        return this.repo.find();
    }
    async getById(id: number): Promise<Doctor> {
        const objeto = await this.repo.findOneBy({ id });
        return objeto ?? new Doctor();
    }
    async create(Doctor: Doctor): Promise<Doctor> {
        return this.repo.save(Doctor);
    }
    async update(Doctor: Doctor): Promise<Doctor> {
        return this.repo.save(Doctor);
    }
    async delete(id: number): Promise<boolean> {
        await this.repo.delete(id);
        return true;
    }

}