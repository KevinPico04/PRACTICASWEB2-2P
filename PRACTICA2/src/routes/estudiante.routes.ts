import { Router } from 'express';
import { EstudianteController } from '../controllers/estudiante.controller';

const router = Router();
const estudianteController = new EstudianteController();

router.post('/', (req, res) => estudianteController.createEstudiante(req, res));
router.get('/', (req, res) => estudianteController.getAllEstudiantes(req, res));
router.get('/:id', (req, res) => estudianteController.getEstudianteById(req, res));

export default router;
