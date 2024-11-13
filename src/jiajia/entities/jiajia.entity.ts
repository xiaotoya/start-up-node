import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Jiujiu } from "./jiujiu.entity";
import { Hobby } from "./hobby.entity";
import { Exclude } from "class-transformer";

@Entity()
export class Jiajia {
    @PrimaryGeneratedColumn()
    @Exclude({ toPlainOnly: true })
    id: number;

    @Column({type: 'varchar', length: 50})
    name: string;

    @Column({type: 'varchar', length: 50})
    state: string;

    @OneToOne(() => Jiujiu)
    @JoinColumn({name: 'Jiu_id'})
    jiujiu: Jiujiu

    @OneToMany(() => Hobby, (hobby) => hobby.jiajia)
    hobby: Hobby[];
}
