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

export class ProcedimientoDto {

  id?: number;

  @IsString()
  @IsNotEmpty()
  @Length(1, 255)
  nombre!: string;

  @IsInt()
  @Min(1)
  categoria_id!: number;

  @IsInt()
  @Min(1)
  paciente_id!: number;

  @IsString()
  descripcion!: string;

}