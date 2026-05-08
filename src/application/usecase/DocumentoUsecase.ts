import DocumentoGateway from "../../domain/documento/gateway/DocumentoGateway";
import Documento from "../../domain/documento/model/Documento";

export default class DocumentoUsecase {
    private readonly gateway: DocumentoGateway;

    constructor(gateway: DocumentoGateway) {
        this.gateway = gateway;
    }

    public getAll(): Promise<Array<Documento>> {
        return this.gateway.getAll();
    }

    public getById(id: number): Promise<Documento> {
        return this.gateway.getById(id);
    }

    public create(Documento: Documento): Promise<Documento> {
        return this.gateway.create(Documento);
    }

    public update(Documento: Documento): Promise<Documento> {
        return this.gateway.update(Documento);
    }

    public delete(id: number): Promise<boolean> {
        return this.gateway.delete(id);
    }
    public getByProcedimiento(procedimiento_id: number): Promise<Array<Documento>> {
        return this.gateway.getByProcedimiento(procedimiento_id);
    }
}