import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ControlDeIdiomaService } from './control-de-idioma.service';
import { CreateControlDeIdiomaDto } from './dto/create-control-de-idioma.dto';
import { UpdateControlDeIdiomaDto } from './dto/update-control-de-idioma.dto';
import { ControlDeIdioma } from './entities/controlDeIdioma.entity';

@Resolver(() => ControlDeIdioma)
export class ControlDeIdiomaResolver {
  constructor(private readonly controlDeIdiomaService: ControlDeIdiomaService) {}

  @Query(() => [ControlDeIdioma])
  async controlDeIdiomas() {
    return this.controlDeIdiomaService.findAll();
  }

  @Query(() => ControlDeIdioma)
  async controlDeIdioma(@Args('id') id: number) {
    return this.controlDeIdiomaService.findOne(id);
  }

  @Mutation(() => ControlDeIdioma)
  async createControlDeIdioma(@Args('createControlDeIdiomaDto') createControlDeIdiomaDto: CreateControlDeIdiomaDto) {
    return this.controlDeIdiomaService.create(createControlDeIdiomaDto);
  }

  @Mutation(() => ControlDeIdioma)
  async updateControlDeIdioma(@Args('id') id: number, @Args('updateControlDeIdiomaDto') updateControlDeIdiomaDto: UpdateControlDeIdiomaDto) {
    return this.controlDeIdiomaService.update(id, updateControlDeIdiomaDto);
  }

  @Mutation(() => ControlDeIdioma)
  async removeControlDeIdioma(@Args('id') id: number) {
    return this.controlDeIdiomaService.remove(id);
  }
}
