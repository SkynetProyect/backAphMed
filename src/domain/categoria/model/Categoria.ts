import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import type CategoriaInterface from "../interface/CategoriaInterface";

@Entity()
export default class Categoria implements CategoriaInterface {

    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    nombre: string = "";
}