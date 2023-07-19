import { ReporteService } from './reporte.service';
import { CreateReporteDto } from './dto/create-reporte.dto';
import { UpdateReporteDto } from './dto/update-reporte.dto';
export declare class ReporteController {
    private readonly reporteService;
    constructor(reporteService: ReporteService);
    create(createReporteDto: CreateReporteDto): Promise<import("../../entities/reporte.entity").Reporte>;
    findAll(): Promise<import("../../entities/reporte.entity").Reporte[]>;
    findDiario(rajo: string): Promise<import("../../entities/reporte.entity").Reporte[]>;
    findSemanal(rajo: string): Promise<import("../../entities/reporte.entity").Reporte[]>;
    findMensual(rajo: string): Promise<import("../../entities/reporte.entity").Reporte[]>;
    findAnual(rajo: string): Promise<import("../../entities/reporte.entity").Reporte[]>;
    findOne(fecha: Date): Promise<string | import("../../entities/reporte.entity").Reporte[]>;
    update(fecha: Date, updateReporteDto: UpdateReporteDto): string;
    remove(fecha: Date): string;
}
