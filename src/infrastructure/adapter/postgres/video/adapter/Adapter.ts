import VideoGateway from "../../../../../domain/video/gateway/VideoGateway";
import Video from "../../../../../domain/video/model/Video";
import { AppDataSource } from "../../DataSource";

export default class Adapter implements VideoGateway {
    private readonly repo = AppDataSource.getRepository(Video);

    async getAll(): Promise<Array<Video>> {
        return this.repo.find();
    }
    async getById(id: number): Promise<Video> {
        const objeto = await this.repo.findOneBy({ id });
        return objeto ?? new Video();
    }
    async create(Video: Video): Promise<Video> {
        return this.repo.save(Video);
    }
    async update(Video: Video): Promise<Video> {
        return this.repo.save(Video);
    }
    async delete(id: number): Promise<boolean> {
        await this.repo.delete(id);
        return true;
    }
    async getByProcedimiento(procedimiento_id: number): Promise<Array<Video>> {
        return this.repo.findBy({ procedimiento_id });
    }

}