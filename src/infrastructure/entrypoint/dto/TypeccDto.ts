import {
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  Length,
  Min,
} from "class-validator";

export class TypeccDto {

  id?: number;

  @IsString()
  @IsNotEmpty()
  @Length(1, 255)
  nombre!: string;

}