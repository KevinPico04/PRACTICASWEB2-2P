import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstudianteService } from './estudiante.service';
import { EstudianteResolver } from './estudiante.resolver';
import { EstudianteController } from './estudiante.controller';
import { Estudiante } from './entities/estudiante.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Estudiante])],  // Importa la entidad Estudiante
  controllers: [EstudianteController],  // Controlador para las peticiones HTTP
  providers: [EstudianteService, EstudianteResolver],   // Proveedores del servicio y resolver
  exports: [EstudianteService],  // Exporta el servicio para ser utilizado en otros módulos
})
export class EstudianteModule {}
