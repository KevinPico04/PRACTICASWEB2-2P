import express, { Application } from 'express';
import { PrismaClient } from '@prisma/client';
import estudianteRouter from './routes/estudiante';
import idiomaRouter from './routes/idioma';
import controlDeIdiomaRouter from './routes/controldeidioma';
import { AxiosHttpClient, GotHttpClient, HttpClient } from './services/httpClient';

const app: Application = express();
const prisma = new PrismaClient();

app.use(express.json()); // Middleware para parsear JSON

// Rutas
app.use('/estudiantes', estudianteRouter);
app.use('/idiomas', idiomaRouter);
app.use('/controlDeIdiomas', controlDeIdiomaRouter);



const PORT = process.env.PORT || 3000; // Puerto en el que corre el servidor

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Elige el cliente HTTP que deseas usar
// Puedes cambiar entre AxiosHttpClient y GotHttpClient para probar ambos
const httpClient: HttpClient = new AxiosHttpClient();
// const httpClient: HttpClient = new GotHttpClient();

app.get('/conexion', async (req, res) => {
  try {
    const url = 'http://localhost:3005/clientes'; // URL del servicio REST de tu compañero
    const data = await httpClient.get<any[]>(url);
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener datos del servicio externo' });
  }
});