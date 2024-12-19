import {
  IsInt,
  IsEnum,
  IsArray,
  IsOptional,
  IsNotEmpty,
} from 'class-validator';

export class CreateSessionDto {
  @IsInt()
  @IsNotEmpty()
  number: number; // Número de la sesión, obligatorio

  @IsEnum(['active', 'inactive', 'expired', 'waiting', 'finished'])
  status: 'active' | 'inactive' | 'expired' | 'waiting' | 'finished';

  @IsArray()
  @IsOptional()
  files?: number[] = [];

  @IsOptional()
  createdAt?: Date;

  @IsOptional()
  updatedAt?: Date;
}
