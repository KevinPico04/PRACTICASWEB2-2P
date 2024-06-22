import { Injectable, NotFoundException } from '@nestjs/common';
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

  async create(createEstudianteDto: CreateEstudianteDto) {
    const estudiante = this.estudianteRepository.create(createEstudianteDto);
    return this.estudianteRepository.save(estudiante);
  }

  async findAll() {
    return await this.estudianteRepository.find();
  }

  async findOne(id: number) {
    return await this.estudianteRepository.findOne({ where: { id } });
  }

  async update(id: number, updateEstudianteDto: UpdateEstudianteDto) {
    await this.estudianteRepository.update(id, updateEstudianteDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    const estudiante = await this.findOne(id);
    if (!estudiante) {
      throw new NotFoundException('Estudiante not found');
    }
    estudiante.estado = 'INACTIVO';
    return this.estudianteRepository.save(estudiante);
  }
}
