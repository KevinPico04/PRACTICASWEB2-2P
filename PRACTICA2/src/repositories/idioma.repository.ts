import prisma from '../datasources/prisma.datasource';
import { CreateIdiomaDTO } from '../dtos/create-idioma.dto';

export class IdiomaRepository {
  async create(data: CreateIdiomaDTO) {
    return prisma.idioma.create({ data });
  }

  async findAll() {
    return prisma.idioma.findMany();
  }

  async findById(id: number) {
    return prisma.idioma.findUnique({ where: { id } });
  }

  // Otros métodos CRUD...
}
