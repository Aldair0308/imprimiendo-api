import {
  IsArray,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsDateString,
} from 'class-validator';

export class CreateFileDto {
  @IsInt()
  @IsNotEmpty()
  id_v: number;

  @IsEnum(['active', 'inactive', 'archived'])
  status: 'active' | 'inactive' | 'archived';

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  size: number;

  @IsArray()
  @IsInt({ each: true })
  @IsOptional()
  pages: number[] = [];

  @IsEnum(['color', 'black-and-white'])
  color: 'color' | 'black-and-white';

  @IsInt()
  @IsOptional()
  copies: number = 1;

  @IsDateString()
  @IsOptional()
  createdAt?: Date;
}
