import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { UserService } from '../services/user.service';
import { UserControllController } from '../controllers/user-controll/user-controll.controller';

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    controllers: [UserControllController],
    providers: [UserService],
    exports: [UserService],
})
export class UserModule {}
