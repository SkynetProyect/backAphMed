import ImagenInterface from "../../imagen/interface/ImagenInterface";
import DocumentoInterface from "../../documento/interface/DocumentoInterface";
import VideoInterface from "../../video/interface/VideoInterface";

export default interface ProcedimientoInterface {
    id?: number;
    nombre: string;
    categoria_id: number;
    descripcion: string;
    paciente_id: number;
    imagenes: ImagenInterface[];
    documentos: DocumentoInterface[];
    videos: VideoInterface[];
}