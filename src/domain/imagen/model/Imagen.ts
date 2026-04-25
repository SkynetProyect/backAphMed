import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import type ImagenInterface from "../interface/ImagenInterface";

@Entity()
export default class Imagen implements ImagenInterface {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ nullable: true })
    nombre?: string;

    @Column()
    procedimientoId!: number;

    @Column()
    url!: string;
}