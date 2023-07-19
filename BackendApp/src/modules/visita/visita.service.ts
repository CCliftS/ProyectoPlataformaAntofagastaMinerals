import { Injectable, NotFoundException} from '@nestjs/common';
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
    if (!visita) {
      throw new NotFoundException('Visita no encontrada');
    }
    return visita;
  }

  async update(estado: boolean, correo: string, updateVisitaDto: UpdateVisitaDto) {
    const visita = await this.findOne(correo);
    visita.estado = estado;
    Object.assign(visita, updateVisitaDto);
    return await this.visitaRepository.save(visita);
  }

  remove(correo: string) {
    return `This action removes a #${correo} visita`;
  }
}
