import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
import { IUser } from "../../models/IUser";

@Entity()
export class User implements IUser{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: String;

    @Column()
    email: String;

    @Column()
    password: String;


}
