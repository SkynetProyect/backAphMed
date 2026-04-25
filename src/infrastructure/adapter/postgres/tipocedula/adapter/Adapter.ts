import TypeccGateway from "../../../../../domain/tipocedula/gateway/TypeccGateway";
import Typecc from "../../../../../domain/tipocedula/model/Typecc";
import { AppDataSource } from "../../DataSource";

export default class Adapter implements TypeccGateway {
    private readonly repo = AppDataSource.getRepository(Typecc);

    async getAll(): Promise<Array<Typecc>> {
        return this.repo.find();
    }
    async getById(id: number): Promise<Typecc> {
        const objeto = await this.repo.findOneBy({ id });
        return objeto ?? new Typecc();
    }
    async create(Typecc: Typecc): Promise<Typecc> {
        return this.repo.save(Typecc);
    }
    async update(Typecc: Typecc): Promise<Typecc> {
        return this.repo.save(Typecc);
    }
    async delete(id: number): Promise<boolean> {
        await this.repo.delete(id);
        return true;
    }

}