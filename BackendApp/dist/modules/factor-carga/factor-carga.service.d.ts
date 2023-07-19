import { Repository } from 'typeorm';
import { FactorCarga } from '../../entities/factor-carga.entity';
import { CreateFactorCargaDto } from './dto/create-factor-carga.dto';
import { UpdateFactorCargaDto } from './dto/update-factor-carga.dto';
export declare class FactorCargaService {
    private factorCargaRepository;
    constructor(factorCargaRepository: Repository<FactorCarga>);
    create(createFactorCargaDto: CreateFactorCargaDto): Promise<FactorCarga>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateFactorCargaDto: UpdateFactorCargaDto): string;
    remove(id: number): string;
}
