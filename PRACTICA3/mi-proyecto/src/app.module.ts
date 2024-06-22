import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstudianteModule } from './estudiante/estudiante.module';
import { IdiomaModule } from './idioma/idioma.module';
import { ControlDeIdiomaModule } from './controldeidioma/control-de-idioma.module';
import { Estudiante } from './estudiante/entities/estudiante.entity';
import { Idioma } from './idioma/entities/idioma.entity';
import { ControlDeIdioma } from './controldeidioma/entities/controlDeIdioma.entity';
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  imports: [
    EstudianteModule,
    IdiomaModule,
    ControlDeIdiomaModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      entities: [Estudiante, Idioma, ControlDeIdioma ], // Lista de todas las entidades que deben ser sincronizadas
      synchronize: true, // Sincronización automática de esquema (para desarrollo)
      ssl: {
        rejectUnauthorized: false, // Configuración necesaria si estás usando SSL
      },
    }),
    TypeOrmModule.forFeature([Estudiante, Idioma, ControlDeIdioma]), // Registrar las entidades en el contexto de TypeOrmModule
  ],
})
export class AppModule {}
