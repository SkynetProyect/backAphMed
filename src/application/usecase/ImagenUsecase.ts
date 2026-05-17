import ImagenGateway from "../../domain/imagen/gateway/ImagenGateway";
import Imagen from "../../domain/imagen/model/Imagen";

export default class ImagenUsecase {
    private readonly gateway: ImagenGateway;

    constructor(gateway: ImagenGateway) {
        this.gateway = gateway;
    }

    public getAll(): Promise<Array<Imagen>> {
        return this.gateway.getAll();
    }

    public getById(id: number): Promise<Imagen> {
        return this.gateway.getById(id);
    }

    public create(Imagen: Imagen): Promise<Imagen> {
        return this.gateway.create(Imagen);
    }

    public update(Imagen: Imagen): Promise<Imagen> {
        return this.gateway.update(Imagen);
    }

    public delete(id: number): Promise<boolean> {
        return this.gateway.delete(id);
    }
    public getByProcedimiento(procedimiento_id: number): Promise<Array<Imagen>> {
        return this.gateway.getByProcedimiento(procedimiento_id);
    }
    public deleteByProcedimiento(procedimiento_id:number): Promise<boolean>{
        return this.gateway.deleteByProcedimiento(procedimiento_id);
    };
}