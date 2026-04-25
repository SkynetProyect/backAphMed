import Categoria from "../model/Categoria";

export default interface CategoriaGateway{
    getAll(): Promise<Array<Categoria>>;
    getById(id: number): Promise<Categoria>;
    create(categoria: Categoria): Promise<Categoria>;
    update(categoria: Categoria): Promise<Categoria>;
    delete(id: number): Promise<boolean>;
}