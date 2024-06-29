import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';
import { Estudiante } from './entities/estudiante.entity';

@Injectable()
export class EstudianteService {
  constructor(
    @InjectRepository(Estudiante)
    private readonly estudianteRepository: Repository<Estudiante>,
  ) {}

  create(createEstudianteDto: CreateEstudianteDto): Promise<Estudiante> {
    const estudiante = this.estudianteRepository.create(createEstudianteDto);
    return this.estudianteRepository.save(estudiante);
  }

  findAll(): Promise<Estudiante[]> {
    return this.estudianteRepository.find();
  }

  findOne(id: number): Promise<Estudiante> {
    return this.estudianteRepository.findOneBy({ id });
  }

  update(id: number, updateEstudianteDto: UpdateEstudianteDto): Promise<Estudiante> {
    return this.estudianteRepository.save({ ...updateEstudianteDto, id });
  }

  async remove(id: number): Promise<void> {
    await this.estudianteRepository.delete(id);
  }
}
