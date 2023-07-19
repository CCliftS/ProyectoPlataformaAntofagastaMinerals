"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReporteService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const reporte_entity_1 = require("../../entities/reporte.entity");
const typeorm_2 = require("typeorm");
let ReporteService = exports.ReporteService = class ReporteService {
    constructor(reporteRepository) {
        this.reporteRepository = reporteRepository;
    }
    async create(createReporteDto) {
        const reporte = this.reporteRepository.create(createReporteDto);
        return await this.reporteRepository.save(reporte);
    }
    async findReportDiario(rajo) {
        const fechaActual = new Date();
        fechaActual.setHours(0, 0, 0, 0);
        const reportes = await this.reporteRepository.find({
            where: {
                fecha: fechaActual,
                rajo: rajo
            },
        });
        return reportes;
    }
    async findReportSemanal(rajo) {
        const fechaActual = new Date();
        fechaActual.setUTCHours(0, 0, 0, 0);
        const fechaInicioSemana = new Date(fechaActual);
        fechaInicioSemana.setDate(fechaInicioSemana.getDate() - fechaInicioSemana.getDay() - 1);
        const fechaFinSemana = new Date(fechaActual);
        fechaFinSemana.setDate(fechaFinSemana.getDate() + (7 - fechaFinSemana.getDay()));
        const reportes = await this.reporteRepository.find({
            where: {
                fecha: (0, typeorm_2.Between)(fechaInicioSemana, fechaFinSemana),
                rajo: rajo
            },
        });
        return reportes;
    }
    async findReportMensual(rajo) {
        const fechaActual = new Date();
        fechaActual.setUTCHours(0, 0, 0, 0);
        const fechaInicioMes = new Date(fechaActual.getFullYear(), fechaActual.getMonth(), 1);
        const fechaFinMes = new Date(fechaActual.getFullYear(), fechaActual.getMonth() + 1, 0);
        const reportes = await this.reporteRepository.find({
            where: {
                fecha: (0, typeorm_2.Between)(fechaInicioMes, fechaFinMes),
                rajo: rajo
            },
        });
        return reportes;
    }
    async findReportAnual(rajo) {
        const fechaActual = new Date();
        fechaActual.setUTCHours(0, 0, 0, 0);
        const fechaInicioAño = new Date(fechaActual.getFullYear(), 0, 1);
        const fechaFinAño = new Date(fechaActual.getFullYear(), 11, 31);
        const reportes = await this.reporteRepository.find({
            where: {
                fecha: (0, typeorm_2.Between)(fechaInicioAño, fechaFinAño),
                rajo: rajo
            },
        });
        return reportes;
    }
    async getReportesPorRajoyFecha(rajo, starDate, endDate) {
        return await this.reporteRepository.find({
            where: {
                fecha: (0, typeorm_2.Between)(starDate, endDate),
                rajo: rajo
            }
        });
    }
    async findAll() {
        return await this.reporteRepository.find();
        ;
    }
    async findOne(fecha) {
        const reporte = await this.reporteRepository.find({
            where: {
                fecha: fecha
            }
        });
        if (reporte) {
            return reporte;
        }
        return null;
        return `This action returns a #${fecha} reporte`;
    }
    update(fecha, updateReporteDto) {
        return `This action updates a #${fecha} reporte`;
    }
    remove(fecha) {
        return `This action removes a #${fecha} reporte`;
    }
};
exports.ReporteService = ReporteService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(reporte_entity_1.Reporte)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ReporteService);
//# sourceMappingURL=reporte.service.js.map