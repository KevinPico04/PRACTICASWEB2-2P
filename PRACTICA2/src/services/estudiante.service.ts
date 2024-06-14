import { EstudianteRepository } from '../repositories/estudiante.repository';
import { CreateEstudianteDTO } from '../dtos/create-estudiante.dto';

export class EstudianteService {
  private estudianteRepository = new EstudianteRepository();

  async createEstudiante(data: CreateEstudianteDTO) {
    return this.estudianteRepository.create(data);
  }

  async getAllEstudiantes() {
    return this.estudianteRepository.findAll();
  }

  async getEstudianteById(id: number) {
    return this.estudianteRepository.findById(id);
  }

  // Otros métodos...
}
