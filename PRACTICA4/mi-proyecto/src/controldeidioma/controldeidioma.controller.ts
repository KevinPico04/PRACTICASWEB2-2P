import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ControlDeIdiomaService } from './control-de-idioma.service';
import { CreateControlDeIdiomaDto } from './dto/create-control-de-idioma.dto';
import { UpdateControlDeIdiomaDto } from './dto/update-control-de-idioma.dto';

@Controller('controldeidiomas')
export class ControlDeIdiomaController {
  constructor(private readonly controlDeIdiomaService: ControlDeIdiomaService) {}

  @Post()
  create(@Body() createControlDeIdiomaDto: CreateControlDeIdiomaDto) {
    return this.controlDeIdiomaService.create(createControlDeIdiomaDto);
  }

  @Get()
  findAll() {
    return this.controlDeIdiomaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.controlDeIdiomaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateControlDeIdiomaDto: UpdateControlDeIdiomaDto) {
    return this.controlDeIdiomaService.update(+id, updateControlDeIdiomaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.controlDeIdiomaService.remove(+id);
  }
}
