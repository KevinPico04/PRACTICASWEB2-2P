import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import estudianteRoutes from './routes/estudiante.routes';
import idiomaRoutes from './routes/idioma.routes';
import controlDeIdiomaRoutes from './routes/controlDeIdioma.routes';
import githubRoutes from './routes/github.routes'; // Importa las rutas de GitHub

// Cargar las variables de entorno desde el archivo .env
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/estudiantes', estudianteRoutes);
app.use('/idiomas', idiomaRoutes);
app.use('/controlDeIdiomas', controlDeIdiomaRoutes);
app.use('/github', githubRoutes); // Usa las rutas de GitHub

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
