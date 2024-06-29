import { PartialType, InputType } from '@nestjs/graphql';
import { CreateControlDeIdiomaDto } from './create-control-de-idioma.dto';

@InputType()
export class UpdateControlDeIdiomaDto extends PartialType(CreateControlDeIdiomaDto) {}
