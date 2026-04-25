import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import type TypeccInterface from "../interface/TypeccInterface";

@Entity()
export default class Typecc implements TypeccInterface {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ unique: true })
    nombre!: string;
}