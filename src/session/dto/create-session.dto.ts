import {
  IsArray,
  IsEnum,
  IsInt,
  IsOptional,
  IsPositive,
  IsDateString,
} from 'class-validator';

export class CreateSessionDto {
  @IsInt()
  @IsPositive()
  id_v: number;

  @IsEnum(['active', 'inactive', 'expired', 'waiting', 'finished'])
  status: 'active' | 'inactive' | 'expired' | 'waiting' | 'finished';

  @IsArray()
  @IsInt({ each: true })
  @IsOptional()
  files: number[] = [];

  @IsDateString()
  @IsOptional()
  createdAt?: Date;

  @IsDateString()
  @IsOptional()
  updatedAt?: Date;
}
