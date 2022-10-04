import { Entity, Column,OneToMany, PrimaryGeneratedColumn, JoinColumn } from 'typeorm';
import {Permissions} from './Permissions';
@Entity()
export class Roles {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    name: string;

    @OneToMany(type => Permissions, (permission) => permission.roles)
    permissions: Permissions[];
}