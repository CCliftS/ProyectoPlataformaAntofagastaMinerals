import { Reporte } from '../../entities/reporte.entity';
import { Repository } from 'typeorm';
import { CreateReporteDto } from './dto/create-reporte.dto';
import { UpdateReporteDto } from './dto/update-reporte.dto';
export declare class ReporteService {
    private reporteRepository;
    constructor(reporteRepository: Repository<Reporte>);
    create(createReporteDto: CreateReporteDto): Promise<Reporte>;
    findReportDiario(rajo: string): Promise<Reporte[]>;
    findReportSemanal(rajo: string): Promise<Reporte[]>;
    findReportMensual(rajo: string): Promise<Reporte[]>;
    findReportAnual(rajo: string): Promise<Reporte[]>;
    getReportesPorRajoyFecha(rajo: string, starDate: Date, endDate: Date): Promise<Reporte[]>;
    findAll(): Promise<Reporte[]>;
    findOne(fecha: Date): Promise<string | Reporte[]>;
    update(fecha: Date, updateReporteDto: UpdateReporteDto): string;
    remove(fecha: Date): string;
}
