import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { report } from 'process';
import { Reporte } from '../../entities/reporte.entity';
import { Between, DataSource, MoreThanOrEqual, Repository } from 'typeorm';
import { CreateReporteDto } from './dto/create-reporte.dto';
import { UpdateReporteDto } from './dto/update-reporte.dto';
import { Rajo } from '../../entities/rajo.entity';
@Injectable()
export class ReporteService {

  constructor(@InjectRepository(Reporte) private reporteRepository: Repository <Reporte> ){}
  async create(createReporteDto: CreateReporteDto) {
    const reporte = this.reporteRepository.create(createReporteDto);
    return await this.reporteRepository.save(reporte);
  }
  //
  async findReportDiario(rajo:string){
    const fechaActual = new Date();
    fechaActual.setHours(0, 0, 0, 0);
    const reportes = await this.reporteRepository.find({
      where:{
        fecha : fechaActual,
        rajo : rajo
      },
    });
    return reportes;
  }

  async findReportSemanal(rajo:string){
    const fechaActual = new Date();
    fechaActual.setUTCHours(0,0,0,0);
    const fechaInicioSemana = new Date(fechaActual);
    fechaInicioSemana.setDate(fechaInicioSemana.getDate() - fechaInicioSemana.getDay() - 1);
    const fechaFinSemana = new Date(fechaActual);
    fechaFinSemana.setDate(fechaFinSemana.getDate() + (7 -fechaFinSemana.getDay()))
    const reportes = await this.reporteRepository.find({
      where:{
        fecha : Between(fechaInicioSemana,fechaFinSemana),
        rajo:rajo
      },
    });
    return reportes
  }

  async findReportMensual(rajo:string){
    const fechaActual = new Date();
    fechaActual.setUTCHours(0,0,0,0);
    const fechaInicioMes= new Date(fechaActual.getFullYear(),fechaActual.getMonth(),1);
    const fechaFinMes = new Date(fechaActual.getFullYear(),fechaActual.getMonth() + 1,0);
    const reportes = await this.reporteRepository.find({
      where:{
        fecha : Between(fechaInicioMes,fechaFinMes),
        rajo:rajo
      },
    });
    return reportes
  }

  async findReportAnual(rajo:string){
    const fechaActual = new Date();
    fechaActual.setUTCHours(0,0,0,0);
    const fechaInicioAño = new Date(fechaActual.getFullYear(),0,1);
    const fechaFinAño = new Date(fechaActual.getFullYear(),11,31);
    const reportes = await this.reporteRepository.find({
      where:{
        fecha: Between(fechaInicioAño,fechaFinAño),
        rajo:rajo
      },
    });
    return reportes
  }



  //En pirncipio podriamos ocupar esto si no lo de arriba
  async getReportesPorRajoyFecha(rajo:string,starDate:Date,endDate:Date){
    return await this.reporteRepository.find({
      where:{
        fecha: Between(starDate, endDate),
        rajo:rajo
      }
    });
  }

  async findAll() {
    return await this.reporteRepository.find();;
  }

  async findOne(fecha: Date) {
    const reporte = await this.reporteRepository.find(
      {
        where: {
          fecha : fecha
        }
      }
    );
    if(reporte){
      return reporte
    }
    return null

    return `This action returns a #${fecha} reporte`;
  }

  update(fecha: Date, updateReporteDto: UpdateReporteDto) {
    return `This action updates a #${fecha} reporte`;
  }

  remove(fecha: Date) {
    return `This action removes a #${fecha} reporte`;
  }
}
