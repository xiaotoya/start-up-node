import { Exclude } from "class-transformer";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    @Exclude()
    id: number;
    @Column()
    username: string;
    @Column()
    password: string;
}