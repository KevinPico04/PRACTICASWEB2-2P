import { Module } from '@nestjs/common';
import { ControlDeIdiomaGateway } from './controlDeIdioma.gateway';

@Module({
  providers: [ControlDeIdiomaGateway],
})
export class ControlDeIdiomaModule {}
