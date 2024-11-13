import { Injectable } from '@nestjs/common';
import { CreateJiajiaDto } from './dto/create-jiajia.dto';
import { UpdateJiajiaDto } from './dto/update-jiajia.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Jiajia } from './entities/jiajia.entity';
import { Connection, Repository } from 'typeorm';
import { Jiujiu } from './entities/jiujiu.entity';

@Injectable()
export class JiajiaService {
  constructor(
    @InjectRepository(Jiajia) private readonly jiajia: Repository<Jiajia>, 
    private connection: Connection,
  ){}
  async create(createJiajiaDto: CreateJiajiaDto) {
    try {
      const jiajiaEntity = this.jiajia.create(createJiajiaDto);
      const jiujiuEntity = jiajiaEntity.jiujiu;
      await this.connection.manager.transaction(async (transactionalEntityManager) => {
        await transactionalEntityManager.save(jiujiuEntity);
        jiajiaEntity.jiujiu = jiujiuEntity;
        await transactionalEntityManager.save(jiajiaEntity);
      })
    } catch(err) {
      return new Error(err);
    }
    return 'This action adds a new jiajia';
  }

  findAll() {
    return this.jiajia.find({
      relations: {
        jiujiu: true
      }
    });
  }

  findOne(id: number) {
    return this.jiajia.findOneBy({
      id: id,
    })
  }

  async update(id: number, updateJiajiaDto: UpdateJiajiaDto) {
    const jiajiaExist = this.findOne(id);
    if (jiajiaExist) {
      try {
        const jiajiaEntity = this.jiajia.create(updateJiajiaDto);
        jiajiaEntity.id = (await jiajiaExist).id;
        await this.connection.manager.transaction(async (transactionalEntityManager) => {
          await transactionalEntityManager.save(jiajiaEntity);
        })
      } catch(err) {
        return new Error(err);
      }
    }
    return 'success';
  }

  async remove(id: number) {
    const jiajiaExist = this.findOne(id);
    if (jiajiaExist) {
      try {
        await this.connection.manager.transaction(async (transactionalEntityManager) => {
          await transactionalEntityManager.remove(jiajiaExist);
        })
      } catch(err) {
        return new Error(err);
      }
    }
    return `This action removes a #${id} jiajia`;
  }
}
