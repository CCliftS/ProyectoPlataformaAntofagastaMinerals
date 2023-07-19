import { Repository } from 'typeorm';
import { DatosPlan } from '../../entities/datos_plan.entity';
import { CreateDatosPlanDto } from './dto/create-datos_plan.dto';
import { UpdateDatosPlanDto } from './dto/update-datos_plan.dto';
export declare class DatosPlanService {
    private datosPlanRepository;
    constructor(datosPlanRepository: Repository<DatosPlan>);
    create(createDatosPlanDto: CreateDatosPlanDto): Promise<DatosPlan>;
    findDatosPlanDiario(rajo: string): Promise<DatosPlan[]>;
    findDatosPlanSemanal(rajo: string): Promise<DatosPlan[]>;
    findDatosPlanMensual(rajo: string): Promise<DatosPlan[]>;
    findDatosPlanAnual(rajo: string): Promise<DatosPlan[]>;
    findAll(): string;
    findOne(fecha: Date): Promise<string>;
    update(fecha: Date, updateDatosPlanDto: UpdateDatosPlanDto): string;
    remove(fecha: Date): string;
}
