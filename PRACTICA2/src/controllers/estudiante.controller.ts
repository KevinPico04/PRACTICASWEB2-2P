import { Request, Response } from 'express';
import { EstudianteService } from '../services/estudiante.service';
import { CreateEstudianteDTO } from '../dtos/create-estudiante.dto';

export class EstudianteController {
  private estudianteService = new EstudianteService();

  async createEstudiante(req: Request, res: Response) {
    const data: CreateEstudianteDTO = req.body;
    const estudiante = await this.estudianteService.createEstudiante(data);
    res.json(estudiante);
  }

  async getAllEstudiantes(req: Request, res: Response) {
    const estudiantes = await this.estudianteService.getAllEstudiantes();
    res.json(estudiantes);
  }

  async getEstudianteById(req: Request, res: Response) {
    const { id } = req.params;
    const estudiante = await this.estudianteService.getEstudianteById(Number(id));
    res.json(estudiante);
  }

  // Otros métodos...
}
