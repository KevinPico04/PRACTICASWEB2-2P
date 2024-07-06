import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ControlDeIdiomaGateway } from './control/controlDeIdioma.gateway';
import { ControlDeIdiomaModule } from './control/controlDeIdioma.module';

@Module({
  imports: [ControlDeIdiomaModule],
  controllers: [AppController],
  providers: [AppService, ControlDeIdiomaGateway],
})
export class AppModule {}
