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
    id?: number;

    @Column()
    nombre!: string;

    // 🔹 Relación con Categoria
    @ManyToOne(() => Categoria)
    @JoinColumn({ name: "categoria_id" })
    categoria_id!: Categoria;

    // 🔹 Relación con Paciente
    @ManyToOne(() => Paciente)
    @JoinColumn({ name: "paciente_id" })
    paciente_id!: Paciente;

}