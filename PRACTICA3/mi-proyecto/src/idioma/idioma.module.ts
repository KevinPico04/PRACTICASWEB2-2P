import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IdiomaService } from './idioma.service';
import { IdiomaController } from './idioma.controller';
import { Idioma } from './entities/idioma.entity';

@Module({
  controllers: [IdiomaController],
  imports: [
    TypeOrmModule.forFeature([Idioma]),
  ],
  exports: [TypeOrmModule],
  providers: [IdiomaService],
})
export class IdiomaModule {}
