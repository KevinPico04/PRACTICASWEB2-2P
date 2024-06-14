import { Request, Response } from 'express';
import { IdiomaService } from '../services/idioma.service';
import { CreateIdiomaDTO } from '../dtos/create-idioma.dto';

export class IdiomaController {
  private idiomaService = new IdiomaService();

  async createIdioma(req: Request, res: Response) {
    const data: CreateIdiomaDTO = req.body;
    const idioma = await this.idiomaService.createIdioma(data);
    res.json(idioma);
  }

  async getAllIdiomas(req: Request, res: Response) {
    const idiomas = await this.idiomaService.getAllIdiomas();
    res.json(idiomas);
  }

  async getIdiomaById(req: Request, res: Response) {
    const { id } = req.params;
    const idioma = await this.idiomaService.getIdiomaById(Number(id));
    res.json(idioma);
  }

  // Otros métodos...
}
