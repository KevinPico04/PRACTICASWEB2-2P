import { Request, Response } from 'express';
import { ControlDeIdiomaService } from '../services/controlDeIdioma.service';
import { CreateControlDeIdiomaDTO } from '../dtos/create-controlDeIdioma.dto';

export class ControlDeIdiomaController {
  private controlDeIdiomaService = new ControlDeIdiomaService();

  async createControlDeIdioma(req: Request, res: Response) {
    const data: CreateControlDeIdiomaDTO = req.body;
    const controlDeIdioma = await this.controlDeIdiomaService.createControlDeIdioma(data);
    res.json(controlDeIdioma);
  }

  async getAllControlDeIdiomas(req: Request, res: Response) {
    const controlDeIdiomas = await this.controlDeIdiomaService.getAllControlDeIdiomas();
    res.json(controlDeIdiomas);
  }

  async getControlDeIdiomaById(req: Request, res: Response) {
    const { id } = req.params;
    const controlDeIdioma = await this.controlDeIdiomaService.getControlDeIdiomaById(Number(id));
    res.json(controlDeIdioma);
  }

  // Otros métodos...
}
