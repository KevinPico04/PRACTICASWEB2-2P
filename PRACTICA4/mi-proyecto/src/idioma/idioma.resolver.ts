import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { IdiomaService } from './idioma.service';
import { CreateIdiomaDto } from './dto/create-idioma.dto';
import { UpdateIdiomaDto } from './dto/update-idioma.dto';
import { Idioma } from './entities/idioma.entity';

@Resolver(() => Idioma)
export class IdiomaResolver {
  constructor(private readonly idiomaService: IdiomaService) {}

  @Query(() => [Idioma])
  async idiomas() {
    return this.idiomaService.findAll();
  }

  @Query(() => Idioma)
  async idioma(@Args('id') id: number) {
    return this.idiomaService.findOne(id);
  }

  @Mutation(() => Idioma)
  async createIdioma(@Args('createIdiomaDto') createIdiomaDto: CreateIdiomaDto) {
    return this.idiomaService.create(createIdiomaDto);
  }

  @Mutation(() => Idioma)
  async updateIdioma(@Args('id') id: number, @Args('updateIdiomaDto') updateIdiomaDto: UpdateIdiomaDto) {
    return this.idiomaService.update(id, updateIdiomaDto);
  }

  @Mutation(() => Idioma)
  async removeIdioma(@Args('id') id: number) {
    return this.idiomaService.remove(id);
  }
}
