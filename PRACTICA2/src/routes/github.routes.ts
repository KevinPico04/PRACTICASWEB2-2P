import express from 'express';
import githubRepository from '../repositories/github.repository';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const repos = await githubRepository.obtenerRepositorios();
    res.status(200).json(repos);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

export default router;
