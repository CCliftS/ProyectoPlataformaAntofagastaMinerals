import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FactorCargaService } from './factor-carga.service';
import { CreateFactorCargaDto } from './dto/create-factor-carga.dto';
import { UpdateFactorCargaDto } from './dto/update-factor-carga.dto';
import { FactorCarga } from 'src/entities/factor-carga.entity';
import { Rajo } from '../../entities/rajo.entity';
@Controller('factor-carga')
export class FactorCargaController {
  constructor(private readonly factorCargaService: FactorCargaService) {}

  @Post('newFactorCarga')//factor-carga/newFactorCarga
  async create(@Body() createFactorCargaDto: CreateFactorCargaDto) {
    const createdFactorCarga = await this.factorCargaService.create(createFactorCargaDto);
    return createdFactorCarga;
  }

  @Get('rajos')
  async findAll() {
    return await Rajo;
  }
  
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.factorCargaService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.factorCargaService.remove(+id);
  }
}
