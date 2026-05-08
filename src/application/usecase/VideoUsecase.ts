import VideoGateway from "../../domain/video/gateway/VideoGateway";
import Video from "../../domain/video/model/Video";

export default class VideoUsecase {
    private readonly gateway: VideoGateway;

    constructor(gateway: VideoGateway) {
        this.gateway = gateway;
    }

    public getAll(): Promise<Array<Video>> {
        return this.gateway.getAll();
    }

    public getById(id: number): Promise<Video> {
        return this.gateway.getById(id);
    }

    public create(Video: Video): Promise<Video> {
        return this.gateway.create(Video);
    }

    public update(Video: Video): Promise<Video> {
        return this.gateway.update(Video);
    }

    public delete(id: number): Promise<boolean> {
        return this.gateway.delete(id);
    }
    public getByProcedimiento(procedimiento_id: number): Promise<Array<Video>> {
        return this.gateway.getByProcedimiento(procedimiento_id);
    }
}