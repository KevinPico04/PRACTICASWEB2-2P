import { IsInt, Min, Max } from 'class-validator';

export class CreateControlDeIdiomaDto {
  @IsInt()
  estudianteId: number;

  @IsInt()
  idiomaId: number;

  @IsInt()
  @Min(0)
  @Max(100)
  porcentajeLectura: number;

  @IsInt()
  @Min(0)
  @Max(100)
  porcentajeEscritura: number;

  @IsInt()
  @Min(0)
  @Max(100)
  porcentajeEscuchar_hablar: number;
}
