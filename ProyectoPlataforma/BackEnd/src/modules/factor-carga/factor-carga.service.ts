import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SelectQueryBuilder,QueryRunner, Repository } from 'typeorm';
import { FactorCarga } from '../../entities/factor-carga.entity';
import { CreateFactorCargaDto } from './dto/create-factor-carga.dto';
import { UpdateFactorCargaDto } from './dto/update-factor-carga.dto';



@Injectable()
export class FactorCargaService {
  //Creo mi repositorio para que haga la conexión a la base de datos
  constructor(
    @InjectRepository(FactorCarga) private factorCargaRepository: Repository <FactorCarga>,
  ){}

  async create(createFactorCargaDto: CreateFactorCargaDto) {
    const factor_carga = new FactorCarga();
    factor_carga.rajo = createFactorCargaDto.rajo;
    factor_carga.fecha_inicio = new Date(createFactorCargaDto.fecha_inicio);
    factor_carga.fecha_termino = new Date(createFactorCargaDto.fecha_termino);
    factor_carga.tonelaje = createFactorCargaDto.tonelaje;

    return await this.factorCargaRepository.save(factor_carga)
  }


  findAll() {
    return `This action returns all factorCarga`;
  }

  findOne(id: number) {
    return `This action returns a #${id} factorCarga`;
  }

  update(id: number, updateFactorCargaDto: UpdateFactorCargaDto) {
    return `This action updates a #${id} factorCarga`;
  }

  remove(id: number) {
    return `This action removes a #${id} factorCarga`;
  }
  

}
