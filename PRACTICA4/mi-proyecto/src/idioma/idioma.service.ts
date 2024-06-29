import { Injectable } from '@nestjs/common';
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

  create(createIdiomaDto: CreateIdiomaDto): Promise<Idioma> {
    const idioma = this.idiomaRepository.create(createIdiomaDto);
    return this.idiomaRepository.save(idioma);
  }

  findAll(): Promise<Idioma[]> {
    return this.idiomaRepository.find();
  }

  findOne(id: number): Promise<Idioma> {
    return this.idiomaRepository.findOneBy({ id });
  }

  update(id: number, updateIdiomaDto: UpdateIdiomaDto): Promise<Idioma> {
    return this.idiomaRepository.save({ ...updateIdiomaDto, id });
  }

  async remove(id: number): Promise<void> {
    await this.idiomaRepository.delete(id);
  }
}