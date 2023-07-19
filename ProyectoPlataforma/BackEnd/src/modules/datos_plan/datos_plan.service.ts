import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, Repository } from 'typeorm';
import { DatosPlan } from '../../entities/datos_plan.entity';
import { CreateDatosPlanDto } from './dto/create-datos_plan.dto';
import { UpdateDatosPlanDto } from './dto/update-datos_plan.dto';

@Injectable()
export class DatosPlanService {

  constructor(@InjectRepository(DatosPlan) private datosPlanRepository : Repository <DatosPlan>){}

  async create(createDatosPlanDto: CreateDatosPlanDto) {
    const datosPlan = this.datosPlanRepository.create(createDatosPlanDto)
    return await this.datosPlanRepository.save(datosPlan);
  }
  async findDatosPlanDiario(rajo:string){
    const fechaActual = new Date();
    fechaActual.setHours(0, 0, 0, 0);
    const datosPlan = await this.datosPlanRepository.find({
      where:{
        fecha : fechaActual,
        rajo : rajo
      },
    });
    return datosPlan;
  }
  async findDatosPlanSemanal(rajo:string){
    const fechaActual = new Date();
    fechaActual.setUTCHours(0,0,0,0);
    const fechaInicioSemana = new Date(fechaActual);
    fechaInicioSemana.setDate(fechaInicioSemana.getDate() - fechaInicioSemana.getDay() - 1);
    const fechaFinSemana = new Date(fechaActual);
    fechaFinSemana.setDate(fechaFinSemana.getDate() + (7 -fechaFinSemana.getDay()))
    const datosPlan = await this.datosPlanRepository.find({
      where:{
        fecha : Between(fechaInicioSemana,fechaFinSemana),
        rajo:rajo
      },
    });
    return datosPlan
  }
  async findDatosPlanMensual(rajo:string){
    const fechaActual = new Date();
    fechaActual.setUTCHours(0,0,0,0);
    const fechaInicioMes= new Date(fechaActual.getFullYear(),fechaActual.getMonth(),1);
    const fechaFinMes = new Date(fechaActual.getFullYear(),fechaActual.getMonth() + 1,0);
    const datosPlan = await this.datosPlanRepository.find({
      where:{
        fecha : Between(fechaInicioMes,fechaFinMes),
        rajo:rajo
      },
    });
    return datosPlan
  }
  async findDatosPlanAnual(rajo:string){
    const fechaActual = new Date();
    fechaActual.setUTCHours(0,0,0,0);
    const fechaInicioAño = new Date(fechaActual.getFullYear(),0,1);
    const fechaFinAño = new Date(fechaActual.getFullYear(),11,31);
    const datosPlan = await this.datosPlanRepository.find({
      where:{
        fecha: Between(fechaInicioAño,fechaFinAño),
        rajo:rajo
      },
    });
    return datosPlan
  }

  findAll() {
    return `This action returns all datosPlan`;
  }

  async findOne(fecha: Date) {
    const datosPlan = await this.datosPlanRepository.find(
      {
      where:{
        fecha: fecha
      }

      }
    );
    return `This action returns a #${fecha} datosPlan`;
  }

  update(fecha: Date, updateDatosPlanDto: UpdateDatosPlanDto) {
    return `This action updates a #${fecha} datosPlan`;
  }

  remove(fecha: Date) {
    return `This action removes a #${fecha} datosPlan`;
  }
}
