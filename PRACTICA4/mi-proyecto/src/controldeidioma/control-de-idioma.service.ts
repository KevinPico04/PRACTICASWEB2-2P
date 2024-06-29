import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateControlDeIdiomaDto } from './dto/create-control-de-idioma.dto';
import { UpdateControlDeIdiomaDto } from './dto/update-control-de-idioma.dto';
import { ControlDeIdioma } from './entities/controlDeIdioma.entity';

@Injectable()
export class ControlDeIdiomaService {
  constructor(
    @InjectRepository(ControlDeIdioma)
    private readonly controlDeIdiomaRepository: Repository<ControlDeIdioma>,
  ) {}

  create(createControlDeIdiomaDto: CreateControlDeIdiomaDto): Promise<ControlDeIdioma> {
    const controlDeIdioma = this.controlDeIdiomaRepository.create(createControlDeIdiomaDto);
    return this.controlDeIdiomaRepository.save(controlDeIdioma);
  }

  findAll(): Promise<ControlDeIdioma[]> {
    return this.controlDeIdiomaRepository.find();
  }

  findOne(id: number): Promise<ControlDeIdioma> {
    return this.controlDeIdiomaRepository.findOneBy({ id });
  }

  update(id: number, updateControlDeIdiomaDto: UpdateControlDeIdiomaDto): Promise<ControlDeIdioma> {
    return this.controlDeIdiomaRepository.save({ ...updateControlDeIdiomaDto, id });
  }

  async remove(id: number): Promise<void> {
    await this.controlDeIdiomaRepository.delete(id);
  }
}
