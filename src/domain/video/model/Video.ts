import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import type VideoInterface from "../interface/VideoInterface";
import Procedimiento from "../../procedimiento/model/Procedimiento";

@Entity()
export default class Video implements VideoInterface {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ unique: true })
    url!: string;
    
    @Column()
    procedimientoId!: number;

}