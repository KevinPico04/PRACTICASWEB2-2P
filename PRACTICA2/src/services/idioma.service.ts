import { IdiomaRepository } from '../repositories/idioma.repository';
import { CreateIdiomaDTO } from '../dtos/create-idioma.dto';

export class IdiomaService {
  private idiomaRepository = new IdiomaRepository();

  async createIdioma(data: CreateIdiomaDTO) {
    return this.idiomaRepository.create(data);
  }

  async getAllIdiomas() {
    return this.idiomaRepository.findAll();
  }

  async getIdiomaById(id: number) {
    return this.idiomaRepository.findById(id);
  }

  // Otros métodos...
}
