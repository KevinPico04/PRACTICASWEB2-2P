import { IsString, IsNotEmpty } from 'class-validator';

export class CreateIdiomaDto {
  @IsString()
  @IsNotEmpty()
  descripcion: string;
}
