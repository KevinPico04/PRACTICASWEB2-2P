import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IdiomaService } from './idioma.service';
import { IdiomaResolver } from './idioma.resolver';
import { IdiomaController } from './idioma.controller';
import { Idioma } from './entities/idioma.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Idioma])],  // Importa la entidad Idioma
  controllers: [IdiomaController],  // Controlador para las peticiones HTTP
  providers: [IdiomaService, IdiomaResolver],   // Proveedores del servicio y resolver
  exports: [IdiomaService],  // Exporta el servicio para ser utilizado en otros módulos
})
export class IdiomaModule {}
