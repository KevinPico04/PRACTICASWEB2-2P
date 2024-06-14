import prisma from '../datasources/prisma.datasource';
import { CreateControlDeIdiomaDTO } from '../dtos/create-controlDeIdioma.dto';

export class ControlDeIdiomaRepository {
  async create(data: CreateControlDeIdiomaDTO) {
    return prisma.controlDeIdioma.create({ data });
  }

  async findAll() {
    return prisma.controlDeIdioma.findMany();
  }

  async findById(id: number) {
    return prisma.controlDeIdioma.findUnique({ where: { id } });
  }

  // Otros métodos CRUD...
}
