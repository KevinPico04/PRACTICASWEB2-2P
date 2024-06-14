import { Router } from 'express';
import { ControlDeIdiomaController } from '../controllers/controlDeIdioma.controller';

const router = Router();
const controlDeIdiomaController = new ControlDeIdiomaController();

router.post('/', (req, res) => controlDeIdiomaController.createControlDeIdioma(req, res));
router.get('/', (req, res) => controlDeIdiomaController.getAllControlDeIdiomas(req, res));
router.get('/:id', (req, res) => controlDeIdiomaController.getControlDeIdiomaById(req, res));

export default router;
