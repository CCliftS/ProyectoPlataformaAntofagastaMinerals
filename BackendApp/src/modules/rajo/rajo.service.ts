import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateRajoDto } from './dto/create-rajo.dto';
import { UpdateRajoDto } from './dto/update-rajo.dto';
import { Rajo } from './entities/rajo.entity';
import { Repository } from 'typeorm';


@Injectable()
export class RajoService {

  constructor(
    @InjectRepository(Rajo) private rajoRepository : Repository<Rajo>){}

  async create(createRajoDto: CreateRajoDto) {
    const rajo = this.rajoRepository.create(createRajoDto);
    return await this.rajoRepository.save(rajo);
  }

  async findAll() {
    return await this.rajoRepository.find();
  }

  async findOne(nombre_rajo: string) {
    const rajo = await this.rajoRepository.findOne(
      {
        where:{
          nombre_rajo : nombre_rajo
        }
      }
    );
    if(rajo){
      return rajo
    }
    return null//o una excepción
  }

  
}
