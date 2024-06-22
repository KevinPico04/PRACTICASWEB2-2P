import { PartialType } from '@nestjs/mapped-types';
import { CreateControlDeIdiomaDto } from './create-control-de-idioma.dto';

export class UpdateControlDeIdiomaDto extends PartialType(CreateControlDeIdiomaDto) {}
