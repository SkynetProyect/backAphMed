import Doctor from "../model/Doctor";

export default interface DoctorGateway{
    getAll(): Promise<Array<Doctor>>;
    getById(id: number): Promise<Doctor>;
    create(Doctor: Doctor): Promise<Doctor>;
    update(Doctor: Doctor): Promise<Doctor>;
    delete(id: number): Promise<boolean>;
}