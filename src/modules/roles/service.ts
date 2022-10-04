import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CheckPerms } from './CheckDto';
import { Permissions } from './entity/Permissions';
import { Roles } from './entity/Roles';
import { User } from './entity/user';

@Injectable()
export class Service {
  constructor(
    @InjectRepository(Permissions)
    private PermissionRepository: Repository<Permissions>,
    @InjectRepository(Roles)
    private RolesRepository: Repository<Roles>,
    @InjectRepository(User)
    private UserRepository: Repository<User>,
    
    ) 
    {}
    findAll(): Promise<Permissions[]> {
    return this.PermissionRepository.find();
    }

    async remove(id: number): Promise<void> {
    await this.PermissionRepository.delete(id);
    }
    async newPermission(name: string, description: string,role : Roles): Promise<Permissions> {
        const permission = new Permissions();
        permission.name = name;
        permission.description = description;
        return await this.PermissionRepository.save(permission);
        }
    async CheckUserISadmin() {
        const user = await this.UserRepository.find({
            where: {
                id: 1,
            },
            relations: ['role','role.permissions'],
            
        });
        user.forEach((user) => {
            console.log(user.role)
        }
        );
    }
    async checkUserPermission(name: string) {
        const user = await this.UserRepository.find({
            where: {
                id: 1,
            },
            select: ['role','name','id'],
            relations: ['role.permissions'],

        });
        let returnvalue : boolean = false;
        user.forEach((user) => {
            user.role.permissions.forEach((permission) => {
                if(permission.name == name) return returnvalue = true;
            })
        }
        );
        return returnvalue;
    }
    async CheckAdmin(perms: CheckPerms): Promise<Boolean> {
        const have = this.PermissionRepository.findOne(
            {
                where: {
                    name: perms.name
                        
                },
            }
        );
        console.log(await this.checkUserPermission("admin.watch"));
        return have.then((res) => {
           return res ? true : false;
        })
    }
}