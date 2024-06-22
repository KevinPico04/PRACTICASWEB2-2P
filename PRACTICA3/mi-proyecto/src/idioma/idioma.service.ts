import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateIdiomaDto } from './dto/create-idioma.dto';
import { UpdateIdiomaDto } from './dto/update-idioma.dto';
import { Idioma } from './entities/idioma.entity';

@Injectable()
export class IdiomaService {
  constructor(
    @InjectRepository(Idioma)
    private readonly idiomaRepository: Repository<Idioma>,
  ) {}

  async create(createIdiomaDto: CreateIdiomaDto) {
    const idioma = this.idiomaRepository.create(createIdiomaDto);
    return this.idiomaRepository.save(idioma);
  }

  async findAll() {
    return await this.idiomaRepository.find();
  }

  async findOne(id: number) {
    return await this.idiomaRepository.findOne({ where: { id } });
  }

  async update(id: number, updateIdiomaDto: UpdateIdiomaDto) {
    await this.idiomaRepository.update(id, updateIdiomaDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    const idioma = await this.findOne(id);
    if (!idioma) {
      throw new NotFoundException('Idioma not found');
    }
    idioma.estado = 'INACTIVO';
    return this.idiomaRepository.save(idioma);
  }
}
