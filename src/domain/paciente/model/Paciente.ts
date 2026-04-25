import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import type PacienteInterface from "../interface/PacienteInterface";

@Entity()
export default class Paciente implements PacienteInterface {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    nombre!: string;

    @Column({ unique: true })
    email!: string;

    @Column()
    telefono!: string;

    @Column()
    tipo_documento!: string;

    @Column({ unique: true })
    identificacion!: string;
}