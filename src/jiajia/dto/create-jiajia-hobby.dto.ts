import { IsNotEmpty } from "class-validator";
import { CreateJiujiuDto } from "./create-jiujiu.dto";

export class CreateJiajiaHobbyDto {
    @IsNotEmpty()
    readonly name: string;
}
