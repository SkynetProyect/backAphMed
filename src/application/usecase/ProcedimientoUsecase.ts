import ProcedimientoGateway from "../../domain/procedimiento/gateway/ProcedimientoGateway";
import Procedimiento from "../../domain/procedimiento/model/Procedimiento";

export default class ProcedimientoUsecase {
    private readonly gateway: ProcedimientoGateway;

    constructor(gateway: ProcedimientoGateway) {
        this.gateway = gateway;
    }

    public getAll(): Promise<Array<Procedimiento>> {
        return this.gateway.getAll();
    }

    public getById(id: number): Promise<Procedimiento> {
        return this.gateway.getById(id);
    }

    public create(Procedimiento: Procedimiento): Promise<Procedimiento> {
        return this.gateway.create(Procedimiento);
    }

    public update(Procedimiento: Procedimiento): Promise<Procedimiento> {
        return this.gateway.update(Procedimiento);
    }

    public delete(id: number): Promise<boolean> {
        return this.gateway.delete(id);
    }
}