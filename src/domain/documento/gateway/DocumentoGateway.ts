import Documento from "../model/Documento";

export default interface DocumentoGateway{
    getAll(): Promise<Array<Documento>>;
    getById(id: number): Promise<Documento>;
    create(Documento: Documento): Promise<Documento>;
    update(Documento: Documento): Promise<Documento>;
    delete(id: number): Promise<boolean>;
    getByProcedimiento(procedimiento_id: number): Promise<Array<Documento>>;
}