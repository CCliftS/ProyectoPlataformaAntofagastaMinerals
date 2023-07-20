import { DatosPlanService } from './datos_plan.service';
import { CreateDatosPlanDto } from './dto/create-datos_plan.dto';
import { UpdateDatosPlanDto } from './dto/update-datos_plan.dto';
export declare class DatosPlanController {
    private readonly datosPlanService;
    constructor(datosPlanService: DatosPlanService);
    create(createDatosPlanDto: CreateDatosPlanDto): Promise<import("../../entities/datos_plan.entity").DatosPlan>;
    findAll(): string;
    findDiario(rajo: string): Promise<import("../../entities/datos_plan.entity").DatosPlan[]>;
    findSemanal(rajo: string): Promise<import("../../entities/datos_plan.entity").DatosPlan[]>;
    findMensual(rajo: string): Promise<import("../../entities/datos_plan.entity").DatosPlan[]>;
    findAnual(rajo: string): Promise<import("../../entities/datos_plan.entity").DatosPlan[]>;
    findOne(fecha: Date): Promise<string>;
    update(fecha: Date, updateDatosPlanDto: UpdateDatosPlanDto): string;
    remove(fecha: Date): string;
}
