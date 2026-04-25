import TypeccGateway from "../../domain/tipocedula/gateway/TypeccGateway";
import Typecc from "../../domain/tipocedula/model/Typecc";

export default class TypeccUsecase {
    private readonly gateway: TypeccGateway;

    constructor(gateway: TypeccGateway) {
        this.gateway = gateway;
    }

    public getAll(): Promise<Array<Typecc>> {
        return this.gateway.getAll();
    }

    public getById(id: number): Promise<Typecc> {
        return this.gateway.getById(id);
    }

    public create(Typecc: Typecc): Promise<Typecc> {
        return this.gateway.create(Typecc);
    }

    public update(Typecc: Typecc): Promise<Typecc> {
        return this.gateway.update(Typecc);
    }

    public delete(id: number): Promise<boolean> {
        return this.gateway.delete(id);
    }
}