import { Entity, Column,ManyToOne, PrimaryGeneratedColumn, JoinColumn } from 'typeorm';
import { Roles } from './Roles';
@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    email: string;
    @Column()
    password: string;

    @ManyToOne(type => Roles, (role) => role.id)
    role: Roles;
}