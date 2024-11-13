import { Exclude } from "class-transformer";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Jiujiu {
    @PrimaryGeneratedColumn()
    @Exclude({ toPlainOnly: true })
    id: number;
    @Column({type: 'varchar', length: 50})
    name: string;
    @Column({type: 'varchar', length: 50})
    state: string;
}