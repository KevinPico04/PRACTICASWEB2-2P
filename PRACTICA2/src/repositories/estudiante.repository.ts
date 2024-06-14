import prisma from '../datasources/prisma.datasource';
import { CreateEstudianteDTO } from '../dtos/create-estudiante.dto';

export class EstudianteRepository {
  async create(data: CreateEstudianteDTO) {
    return prisma.estudiante.create({ data });
  }

  async findAll() {
    return prisma.estudiante.findMany();
  }

  async findById(id: number) {
    return prisma.estudiante.findUnique({ where: { id } });
  }

  // Otros métodos CRUD...
}
