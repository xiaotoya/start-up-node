import { PartialType } from '@nestjs/mapped-types';
import { CreateJiajiaDto } from './create-jiajia.dto';

export class UpdateJiajiaDto extends PartialType(CreateJiajiaDto) {}
