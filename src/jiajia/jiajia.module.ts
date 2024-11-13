import { Module } from '@nestjs/common';
import { JiajiaService } from './jiajia.service';
import { JiajiaController } from './jiajia.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Jiajia } from './entities/jiajia.entity';
import { Jiujiu } from './entities/jiujiu.entity';
import { JiajiaHobbyController } from './jiajia-hobby/jiajia-hobby.controller';
import { JiajiaHobbyService } from './jiajia-hobby/jiajia-hobby.service';

@Module({
  imports: [TypeOrmModule.forFeature([Jiajia,Jiujiu])],
  controllers: [JiajiaController, JiajiaHobbyController],
  providers: [JiajiaService, JiajiaHobbyService],
})
export class JiajiaModule {}
