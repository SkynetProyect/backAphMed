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

export class PacienteDto {

  id?: number;

  @IsString()
  @IsNotEmpty()
  @Length(1, 255)
  nombre!: string;

  @IsEmail()
  @Length(1, 255)
  email!: string;

  @IsString()
  @IsNotEmpty()
  @Length(1, 255)
  telefono!: string;

  @IsInt()
  @Min(1)
  tipo_documento!: number;

  @IsString()
  @IsNotEmpty()
  @Length(1, 255)
  identificacion!: string;

}