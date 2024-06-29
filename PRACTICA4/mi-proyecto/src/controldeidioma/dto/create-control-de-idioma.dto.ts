import { InputType, Field, Int } from '@nestjs/graphql';
import { IsInt, Min, Max } from 'class-validator';

@InputType()
export class CreateControlDeIdiomaDto {
  @Field(() => Int)
  @IsInt()
  estudianteId: number;

  @Field(() => Int)
  @IsInt()
  idiomaId: number;

  @Field(() => Int)
  @IsInt()
  @Min(0)
  @Max(100)
  porcentajeLectura: number;

  @Field(() => Int)
  @IsInt()
  @Min(0)
  @Max(100)
  porcentajeEscritura: number;

  @Field(() => Int)
  @IsInt()
  @Min(0)
  @Max(100)
  porcentajeEscuchar_hablar: number;

  @Field(() => String, { nullable: true, defaultValue: 'ACTIVO' })
  estado?: string;
}
