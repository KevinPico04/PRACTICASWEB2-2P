import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstudianteService } from './estudiante.service';
import { EstudianteController } from './estudiante.controller';
import { Estudiante } from 'src/estudiante/entities/estudiante.entity';

@Module({
  controllers: [EstudianteController],
  imports: [
    TypeOrmModule.forFeature([Estudiante]),
  ],
  exports: [TypeOrmModule],
  providers: [EstudianteService],
})
export class EstudianteModule {}
