import { ControlDeIdiomaRepository } from '../repositories/controlDeIdioma.repository';
import { CreateControlDeIdiomaDTO } from '../dtos/create-controlDeIdioma.dto';

export class ControlDeIdiomaService {
  private controlDeIdiomaRepository = new ControlDeIdiomaRepository();

  async createControlDeIdioma(data: CreateControlDeIdiomaDTO) {
    return this.controlDeIdiomaRepository.create(data);
  }

  async getAllControlDeIdiomas() {
    return this.controlDeIdiomaRepository.findAll();
  }

  async getControlDeIdiomaById(id: number) {
    return this.controlDeIdiomaRepository.findById(id);
  }

  // Otros métodos...
}
