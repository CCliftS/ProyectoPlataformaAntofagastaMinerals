import { Controller, Get,Query, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DatosPlanService } from './datos_plan.service';
import { CreateDatosPlanDto } from './dto/create-datos_plan.dto';
import { UpdateDatosPlanDto } from './dto/update-datos_plan.dto';

@Controller('datos-plan')
export class DatosPlanController {
  constructor(private readonly datosPlanService: DatosPlanService) {}

  @Post()
  create(@Body() createDatosPlanDto: CreateDatosPlanDto) {
    return this.datosPlanService.create(createDatosPlanDto);
  }

  @Get()
  findAll() {
    return this.datosPlanService.findAll();
  }
  @Get('diario')
  async findDiario(@Query('rajo') rajo:string){
    return await this.datosPlanService.findDatosPlanDiario(rajo);
  }
  @Get('semanal')
  async findSemanal(@Query('rajo') rajo:string){
    return await this.datosPlanService.findDatosPlanSemanal(rajo);
  }

  @Get('mensual')
  async findMensual(@Query('rajo') rajo:string){
    return await this.datosPlanService.findDatosPlanMensual(rajo);
  }  

  @Get('anual')
  async findAnual(@Query('rajo') rajo:string){
    return await this.datosPlanService.findDatosPlanAnual(rajo);
  }

  @Get(':id')
  findOne(@Param('id') fecha: Date) {
    return this.datosPlanService.findOne(fecha);
  }

  @Patch(':id')
  update(@Param('id') fecha: Date, @Body() updateDatosPlanDto: UpdateDatosPlanDto) {
    return this.datosPlanService.update(fecha, updateDatosPlanDto);
  }

  @Delete(':id')
  remove(@Param('id') fecha: Date) {
    return this.datosPlanService.remove(fecha);
  }
}
