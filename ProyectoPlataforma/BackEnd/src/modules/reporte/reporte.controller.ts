import { Controller, Get, Post, Body, Patch, Param, Delete,Query } from '@nestjs/common';
import { ReporteService } from './reporte.service';
import { CreateReporteDto } from './dto/create-reporte.dto';
import { UpdateReporteDto } from './dto/update-reporte.dto';
import { get } from 'http';

@Controller('reporte')
export class ReporteController {
  constructor(private readonly reporteService: ReporteService) {}

  @Post()
  async create(@Body() createReporteDto: CreateReporteDto) {
    return this.reporteService.create(createReporteDto);
  }

  //Para  obtener todos los reportes
  @Get('allreportes')
  async findAll() {
    return await this.reporteService.findAll();
  }

  @Get('diario')
  async findDiario(@Query('rajo') rajo:string){
    return await this.reporteService.findReportDiario(rajo);
  }

  @Get('semanal')
  async findSemanal(@Query('rajo') rajo:string){
    return await this.reporteService.findReportSemanal(rajo);
  }

  @Get('mensual')
  async findMensual(@Query('rajo') rajo:string){
    return await this.reporteService.findReportMensual(rajo);
  }

  @Get('anual')
  async findAnual(@Query('rajo') rajo:string){
    return await this.reporteService.findReportAnual(rajo);
  }


  @Get(':fecha')
  findOne(@Param('fecha') fecha: Date) {
    return this.reporteService.findOne(fecha);
  }

  @Patch(':id')
  update(@Param('fecha') fecha: Date, @Body() updateReporteDto: UpdateReporteDto) {
    return this.reporteService.update(fecha, updateReporteDto);
  }

  @Delete(':fecha')
  remove(@Param('fecha') fecha: Date) {
    return this.reporteService.remove(fecha);
  }
}
