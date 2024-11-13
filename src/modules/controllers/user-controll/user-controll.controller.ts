import { Body, Controller, Post } from '@nestjs/common';
import { User } from 'src/modules/entities/user.entity';
import { UserService } from 'src/modules/services/user.service';

@Controller('user-controll')
export class UserControllController {
    constructor(private userSvc: UserService) {}

    @Post()
    async create(@Body() user: User): Promise<string | Error> {
      return await this.userSvc.multiOperation(user)
    }
}
