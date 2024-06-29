import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { EstudianteService } from './estudiante.service';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';
import { Estudiante } from './entities/estudiante.entity';

@Resolver(() => Estudiante)
export class EstudianteResolver {
  constructor(private readonly estudianteService: EstudianteService) {}

  @Query(() => [Estudiante])
  async estudiantes() {
    return this.estudianteService.findAll();
  }

  @Query(() => Estudiante)
  async estudiante(@Args('id') id: number) {
    return this.estudianteService.findOne(id);
  }

  @Mutation(() => Estudiante)
  async createEstudiante(@Args('createEstudianteDto') createEstudianteDto: CreateEstudianteDto) {
    return this.estudianteService.create(createEstudianteDto);
  }

  @Mutation(() => Estudiante)
  async updateEstudiante(@Args('id') id: number, @Args('updateEstudianteDto') updateEstudianteDto: UpdateEstudianteDto) {
    return this.estudianteService.update(id, updateEstudianteDto);
  }

  @Mutation(() => Estudiante)
  async removeEstudiante(@Args('id') id: number) {
    return this.estudianteService.remove(id);
  }
}
