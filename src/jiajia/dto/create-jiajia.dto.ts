import { IsNotEmpty } from "class-validator";
import { CreateJiujiuDto } from "./create-jiujiu.dto";

export class CreateJiajiaDto {
    @IsNotEmpty()
    readonly name: string;
    @IsNotEmpty()
    readonly state: string;
    readonly jiujiu: CreateJiujiuDto
}
