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

export class DocumentoDto {

  id?: number;

  @IsOptional()
  @IsString()
  @Length(1, 255)
  nombre?: string;

  @IsInt()
  @Min(1)
  procedimiento_id!: number;

  @IsOptional()
  @IsUrl()
  @Length(1, 255)
  url?: string;

}