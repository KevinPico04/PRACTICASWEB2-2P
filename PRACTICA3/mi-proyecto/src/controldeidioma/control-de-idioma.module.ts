import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ControlDeIdiomaService } from './control-de-idioma.service';
import { ControlDeIdiomaController } from './controldeidioma.controller';
import { ControlDeIdioma } from './entities/controldeidioma.entity';

@Module({
  controllers: [ControlDeIdiomaController],
  imports: [
    TypeOrmModule.forFeature([ControlDeIdioma]),
  ],
  exports: [TypeOrmModule],
  providers: [ControlDeIdiomaService],
})
export class ControlDeIdiomaModule {}
