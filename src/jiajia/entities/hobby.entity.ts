import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Jiajia } from "./jiajia.entity";

@Entity()
export class Hobby {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({type: 'varchar', length: 50})
    name: string;

    @ManyToOne(() => Jiajia, (jiajia) => jiajia.hobby)
    @JoinColumn({name: 'jiajia_id'})
    jiajia: Jiajia
}