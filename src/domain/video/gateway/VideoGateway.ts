import Video from "../model/Video";

export default interface VideoGateway{
    getAll(): Promise<Array<Video>>;
    getById(id: number): Promise<Video>;
    create(Video: Video): Promise<Video>;
    update(Video: Video): Promise<Video>;
    delete(id: number): Promise<boolean>;
    getByProcedimiento(procedimiento_id: number): Promise<Array<Video>>;
}