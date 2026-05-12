import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import type DocumentoInterface from "../interface/DocumentoInterface";

@Entity()
export default class Documento implements DocumentoInterface {

    @PrimaryGeneratedColumn()
    id?: number;

    @Column({ default: "Sin nombre", nullable: true })
    nombre?: string;

    @Column()
    procedimiento_id!: number;

    @Column({ nullable: true })
    url?: string;

}