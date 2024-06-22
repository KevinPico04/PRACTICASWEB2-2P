import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateControlDeIdiomaDto } from './dto/create-control-de-idioma.dto';
import { UpdateControlDeIdiomaDto } from './dto/update-control-de-idioma.dto';
import { ControlDeIdioma } from './entities/controldeidioma.entity';

@Injectable()
export class ControlDeIdiomaService {
  constructor(
    @InjectRepository(ControlDeIdioma)
    private readonly controlDeIdiomaRepository: Repository<ControlDeIdioma>,
  ) {}

  async create(createControlDeIdiomaDto: CreateControlDeIdiomaDto) {
    const controlDeIdioma = this.controlDeIdiomaRepository.create(createControlDeIdiomaDto);
    return this.controlDeIdiomaRepository.save(controlDeIdioma);
  }

  async findAll() {
    return await this.controlDeIdiomaRepository.find();
  }

  async findOne(id: number) {
    return await this.controlDeIdiomaRepository.findOne({ where: { id } });
  }

  async update(id: number, updateControlDeIdiomaDto: UpdateControlDeIdiomaDto) {
    await this.controlDeIdiomaRepository.update(id, updateControlDeIdiomaDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    const controlDeIdioma = await this.findOne(id);
    if (!controlDeIdioma) {
      throw new NotFoundException('ControlDeIdioma not found');
    }
    controlDeIdioma.estado = 'INACTIVO';
    return this.controlDeIdiomaRepository.save(controlDeIdioma);
  }
}
