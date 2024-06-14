import { Router } from 'express';
import { IdiomaController } from '../controllers/idioma.controller';

const router = Router();
const idiomaController = new IdiomaController();

router.post('/', (req, res) => idiomaController.createIdioma(req, res));
router.get('/', (req, res) => idiomaController.getAllIdiomas(req, res));
router.get('/:id', (req, res) => idiomaController.getIdiomaById(req, res));

export default router;
