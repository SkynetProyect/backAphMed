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

export class VideoDto {

  id?: number;
  
  @IsUrl()
  @Length(1, 255)
  url!: string;

  @IsInt()
  @Min(1)
  procedimiento_id!: number;

}