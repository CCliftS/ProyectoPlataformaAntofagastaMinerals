import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateVisitaDto } from './dto/create-visita.dto';
import { UpdateVisitaDto } from './dto/update-visita.dto';
import { Visita } from '../../entities/visita.entity';
import { Repository } from 'typeorm';

@Injectable()
export class VisitaService {

  //creo mi repositorio Visita para guardar datos de DB
  constructor(@InjectRepository(Visita) private visitaRepository : Repository <Visita>){}
  async create(createVisitaDto: CreateVisitaDto) {
    const visita = this.visitaRepository.create(createVisitaDto);
    return await this.visitaRepository.save(visita);
  }

  async findAll() {
    return await this.visitaRepository.find();
  }

  async findOne(correo: string) {
    const visita = await this.visitaRepository.findOne(
      {
        where:{
          correo : correo
        }
      }
    );
    if(visita){
      return visita
    }
    return null


    return `This action returns a #${correo} visita`;
  }

  update(correo: string, updateVisitaDto: UpdateVisitaDto) {
    return `This action updates a #${correo} visita`;
  }

  remove(correo: string) {
    return `This action removes a #${correo} visita`;
  }
}
