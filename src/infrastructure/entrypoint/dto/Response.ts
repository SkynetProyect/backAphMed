
export default class Response{
    codigo: number;
    mensaje: string;
    data?: any;

    constructor(codigo: number, mensaje: string, data: any) {
        this.codigo = codigo;
        this.mensaje = mensaje;
        this.data = data;
    }
}