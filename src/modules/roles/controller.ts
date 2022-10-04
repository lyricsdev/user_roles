import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post, Req, UseGuards } from '@nestjs/common';
import { Service } from './service';
import { Permissions } from './entity/Permissions';
import { Roles } from './entity/Roles';
import { CheckPerms } from './CheckDto';
@Controller('/Teach')
export class TeachersController {
  constructor(private RolesService: Service,
 ) {}
    @Get()
    async nothing() {
        const pzidec = new CheckPerms();
        pzidec.name = 'admin.watch';
        return await this.RolesService.CheckAdmin(pzidec);
        return "nothing";
    }
}