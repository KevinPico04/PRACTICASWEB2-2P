import { PartialType, InputType } from '@nestjs/graphql';
import { CreateEstudianteDto } from './create-estudiante.dto';

@InputType()
export class UpdateEstudianteDto extends PartialType(CreateEstudianteDto) {}
