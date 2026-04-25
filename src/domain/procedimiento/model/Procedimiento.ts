import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  JoinColumn
} from "typeorm";

import Categoria from "../../categoria/model/Categoria";
import Paciente from "../../paciente/model/Paciente";
import Imagen from "../../imagen/model/Imagen";
import Documento from "../../documento/model/Documento";
import Video from "../../video/model/Video";

@Entity()
export default class Procedimiento {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    nombre!: string;

    // 🔹 Relación con Categoria
    @ManyToOne(() => Categoria)
    @JoinColumn({ name: "categoria_id" })
    categoria!: Categoria;

    // 🔹 Relación con Paciente
    @ManyToOne(() => Paciente)
    @JoinColumn({ name: "paciente_id" })
    paciente!: Paciente;

    // 🔹 Relación con Imagenes
    @OneToMany(() => Imagen, (imagen) => imagen.procedimientoId, {
        cascade: true
    })
    imagenes!: Imagen[];

    // 🔹 Relación con Documentos
    @OneToMany(() => Documento, (documento) => documento.procedimientoId, {
        cascade: true
    })
    documentos!: Documento[];

    // 🔹 Relación con Videos
    @OneToMany(() => Video, (video) => video.procedimientoId, {
        cascade: true
    })
    videos!: Video[];
}