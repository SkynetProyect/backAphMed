import CategoriaGateway from "../../domain/categoria/gateway/CategoriaGateway";
import Categoria from "../../domain/categoria/model/Categoria";

export default class CategoriaUsecase {
    private readonly gateway: CategoriaGateway;

    constructor(gateway: CategoriaGateway) {
        this.gateway = gateway;
    }

    public getAll(): Promise<Array<Categoria>> {
        return this.gateway.getAll();
    }

    public getById(id: number): Promise<Categoria> {
        return this.gateway.getById(id);
    }

    public create(categoria: Categoria): Promise<Categoria> {
        return this.gateway.create(categoria);
    }

    public update(categoria: Categoria): Promise<Categoria> {
        return this.gateway.update(categoria);
    }

    public delete(id: number): Promise<boolean> {
        return this.gateway.delete(id);
    }
}