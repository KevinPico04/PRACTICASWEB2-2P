import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ControlDeIdiomaService } from './control-de-idioma.service';
import { ControlDeIdiomaResolver } from './control-de-idioma.resolver';
import { ControlDeIdiomaController } from './controlDeIdioma.controller';
import { ControlDeIdioma } from './entities/controlDeIdioma.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ControlDeIdioma])],  // Importa la entidad ControlDeIdioma
  controllers: [ControlDeIdiomaController],  // Controlador para las peticiones HTTP
  providers: [ControlDeIdiomaService, ControlDeIdiomaResolver],   // Proveedores del servicio y resolver
  exports: [ControlDeIdiomaService],  // Exporta el servicio para ser utilizado en otros módulos
})
export class ControlDeIdiomaModule {}
