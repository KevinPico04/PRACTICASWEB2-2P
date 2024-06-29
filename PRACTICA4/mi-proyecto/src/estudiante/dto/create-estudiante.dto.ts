import { Field, InputType } from '@nestjs/graphql';
import { IsString, IsNotEmpty, IsUUID } from 'class-validator';

@InputType()
export class CreateEstudianteDto {
  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @Field(() => String)
  @IsUUID()
  @IsNotEmpty()
  identificacion: string;
}
