import Procedimiento from "../model/Procedimiento";

export default interface ProcedimientoGateway{
    getAll(): Promise<Array<Procedimiento>>;
    getById(id: number): Promise<Procedimiento>;
    create(Procedimiento: Procedimiento): Promise<Procedimiento>;
    update(Procedimiento: Procedimiento): Promise<Procedimiento>;
    delete(id: number): Promise<boolean>;
}