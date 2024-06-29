import { PartialType, InputType } from '@nestjs/graphql';
import { CreateIdiomaDto } from './create-idioma.dto';

@InputType()
export class UpdateIdiomaDto extends PartialType(CreateIdiomaDto) {}
