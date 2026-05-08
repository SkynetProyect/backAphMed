import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import type DoctorInterface from "../interface/DoctorInterface";

@Entity()
export default class Doctor implements DoctorInterface {

    @PrimaryGeneratedColumn()
    id?: number;

    @Column({ unique: true })
    usuario!: string;

    @Column()
    clave!: string;
}