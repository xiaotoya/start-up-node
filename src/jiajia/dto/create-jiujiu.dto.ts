import { IsNotEmpty } from "class-validator";

export class CreateJiujiuDto {
    @IsNotEmpty()
    readonly name: string;
    @IsNotEmpty()
    readonly state: string;
}
