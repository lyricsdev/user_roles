import { forwardRef, Module, OnModuleInit } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Roles } from './entity/Roles';
import { Permissions } from './entity/Permissions';
import { Service } from './service';
import { TeachersController } from './controller';
import { User } from './entity/user';
@Module({
    imports: [TypeOrmModule.forFeature([User,Roles,Permissions])],
    providers: [
      Service
    ],
    controllers: [TeachersController],
  })
  export class RolesModule implements OnModuleInit {
    constructor(private RoleService: Service) {}
  
    async onModuleInit() {
    }
  }