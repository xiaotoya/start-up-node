import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { Connection, Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private readonly user: Repository<User>,
        private connection: Connection,
    ) {}

    insertUser(user: User) {
        this.user.save(user);
    }

    findUser(username: string) {
        return this.user.findOneBy({
            username: username,
        })
    }

    async multiOperation(userObj: User) {
        const queryRunner = this.connection.createQueryRunner();
        try {
            await queryRunner.connect();
            await queryRunner.startTransaction();
            // insert
            await this.user.createQueryBuilder(null, queryRunner).insert().into(User).values(userObj).execute();
            // update
            await this.user.createQueryBuilder(null, queryRunner).update(User).set({username: "ttttttt"}).where("id = :id", {id: userObj.id}).execute();
            await queryRunner.commitTransaction();
        } catch(error) {
            await queryRunner.rollbackTransaction();
            return new Error(error);
        }
        return "Success";
        
    }
}
