import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { JiajiaService } from './jiajia.service';
import { CreateJiajiaDto } from './dto/create-jiajia.dto';
import { UpdateJiajiaDto } from './dto/update-jiajia.dto';
import { plainToInstance } from 'class-transformer';

@Controller('jiajia')
export class JiajiaController {
  constructor(private readonly jiajiaService: JiajiaService) {}

  @Post()
  create(@Body() createJiajiaDto: CreateJiajiaDto) {
    return this.jiajiaService.create(createJiajiaDto);
  }

  @Get()
  async findAll(): Promise<CreateJiajiaDto[]> {
    const result = await this.jiajiaService.findAll();
    return result;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.jiajiaService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateJiajiaDto: UpdateJiajiaDto) {
    return this.jiajiaService.update(+id, updateJiajiaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.jiajiaService.remove(+id);
  }
}
