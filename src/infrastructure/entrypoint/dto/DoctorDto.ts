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

export class DoctorDto {

  id?: number;

  @IsString()
  @IsNotEmpty()
  @Length(3, 255)
  usuario!: string;

  @IsString()
  @IsNotEmpty()
  @Length(6, 255)
  clave!: string;

}