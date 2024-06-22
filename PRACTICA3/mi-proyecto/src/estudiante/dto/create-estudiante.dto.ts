import { IsString, IsNotEmpty, IsUUID } from 'class-validator';

export class CreateEstudianteDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsUUID()
  @IsNotEmpty()
  identificacion: string;
}
