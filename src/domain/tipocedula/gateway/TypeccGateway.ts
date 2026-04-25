import Typecc from "../model/Typecc";

export default interface TypeccGateway{
    getAll(): Promise<Array<Typecc>>;
    getById(id: number): Promise<Typecc>;
    create(Typecc: Typecc): Promise<Typecc>;
    update(Typecc: Typecc): Promise<Typecc>;
    delete(id: number): Promise<boolean>;
}