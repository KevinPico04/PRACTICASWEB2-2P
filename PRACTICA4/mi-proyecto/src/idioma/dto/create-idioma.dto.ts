import { InputType, Field } from '@nestjs/graphql';
import { IsString, IsOptional } from 'class-validator';

@InputType()
export class CreateIdiomaDto {
  @IsString()
  @Field(() => String)
  descripcion: string;

  @IsString()
  @IsOptional()
  @Field(() => String, { nullable: true, defaultValue: 'ACTIVO' })
  estado?: string;
}
