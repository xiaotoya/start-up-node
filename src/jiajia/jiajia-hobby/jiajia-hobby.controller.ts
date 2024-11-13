import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { JiajiaHobbyService } from './jiajia-hobby.service';
import { CreateJiajiaHobbyDto } from '../dto/create-jiajia-hobby.dto';

@Controller('jiajia-hobby')
export class JiajiaHobbyController {
    constructor(private readonly jiajiaHobbySvc: JiajiaHobbyService) {}

//   @Post()
//   create(@Body() createJiajiaHobbyDto: CreateJiajiaHobbyDto) {
//     return this.jiajiaHobbySvc.create(createJiajiaHobbyDto);
//   }

//   @Get()
//   findAll() {
//     return this.jiajiaHobbySvc.findAll();
//   }

//   @Get(':id')
//   findOne(@Param('id') id: string) {
//     return this.jiajiaHobbySvc.findOne(+id);
//   }

//   @Patch(':id')
//   update(@Param('id') id: string, @Body() updateJiajiaDto: CreateJiajiaHobbyDto) {
//     return this.jiajiaHobbySvc.update(+id, updateJiajiaDto);
//   }

//   @Delete(':id')
//   remove(@Param('id') id: string) {
//     return this.jiajiaHobbySvc.remove(+id);
//   }
}
