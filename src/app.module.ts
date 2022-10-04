import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm'
import { RolesModule } from './modules/roles/module';
import { Roles } from './modules/roles/entity/Roles';
import { Permissions } from './modules/roles/entity/Permissions';
import { User } from './modules/roles/entity/user';
@Module({
  imports: [
    RolesModule,
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: '38.242.208.181',
      port: 3306,
      username: 'pizdecfds',
      password: 'txnKrw7KBMAnfNHJ',
      database: 'pizdecfds',
      entities: [User,Roles,Permissions],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
