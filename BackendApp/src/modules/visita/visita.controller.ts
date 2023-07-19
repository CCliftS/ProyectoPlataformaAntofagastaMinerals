import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VisitaService } from './visita.service';
import { CreateVisitaDto } from './dto/create-visita.dto';
import { UpdateVisitaDto } from './dto/update-visita.dto';

@Controller('visita')
export class VisitaController {
  constructor(private readonly visitaService: VisitaService) {}

  @Post('crearVisita')
  async create(@Body() createVisitaDto: CreateVisitaDto) {
    return await this.visitaService.create(createVisitaDto);
  }

  @Get('allvisitas')
  async findAll() {
    return await this.visitaService.findAll();
  }
  
  @Get(':correo')
  findOne(@Param('correo') correo: string) {
    return this.visitaService.findOne(correo);
  }

  @Patch('updateEstado')
  update(@Body() data: {estado: boolean; correo:string}, updateVisitaDto: UpdateVisitaDto ){
    return this.visitaService.update(data.estado, data.correo, updateVisitaDto);
  }

  @Delete(':id')
  remove(@Param('id') correo: string) {
    return this.visitaService.remove(correo);
  }
}
