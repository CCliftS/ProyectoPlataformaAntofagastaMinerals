import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VisitaService } from './visita.service';
import { CreateVisitaDto } from './dto/create-visita.dto';
import { UpdateVisitaDto } from './dto/update-visita.dto';

@Controller('visita')
export class VisitaController {
  constructor(private readonly visitaService: VisitaService) {}

  @Post()
  async create(@Body() createVisitaDto: CreateVisitaDto) {
    return await this.visitaService.create(createVisitaDto);
  }

  @Get()
  async findAll() {
    return await this.visitaService.findAll();
  }

  @Get(':correo')
  findOne(@Param('correo') correo: string) {
    return this.visitaService.findOne(correo);
  }

  @Patch(':correo')
  update(@Param('correo') correo: string, @Body() updateVisitaDto: UpdateVisitaDto) {
    return this.visitaService.update(correo, updateVisitaDto);
  }

  @Delete(':id')
  remove(@Param('id') correo: string) {
    return this.visitaService.remove(correo);
  }
}
