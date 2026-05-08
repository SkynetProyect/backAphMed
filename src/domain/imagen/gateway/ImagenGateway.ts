import Imagen from "../model/Imagen";

export default interface ImagenGateway{
    getAll(): Promise<Array<Imagen>>;
    getById(id: number): Promise<Imagen>;
    create(Imagen: Imagen): Promise<Imagen>;
    update(Imagen: Imagen): Promise<Imagen>;
    delete(id: number): Promise<boolean>;
    getByProcedimiento(procedimiento_id: number): Promise<Array<Imagen>>;
}