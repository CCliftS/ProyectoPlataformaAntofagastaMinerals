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
exports.ReporteController = void 0;
const common_1 = require("@nestjs/common");
const reporte_service_1 = require("./reporte.service");
const create_reporte_dto_1 = require("./dto/create-reporte.dto");
const update_reporte_dto_1 = require("./dto/update-reporte.dto");
let ReporteController = exports.ReporteController = class ReporteController {
    constructor(reporteService) {
        this.reporteService = reporteService;
    }
    async create(createReporteDto) {
        return this.reporteService.create(createReporteDto);
    }
    async findAll() {
        return await this.reporteService.findAll();
    }
    async findDiario(rajo) {
        return await this.reporteService.findReportDiario(rajo);
    }
    async findSemanal(rajo) {
        return await this.reporteService.findReportSemanal(rajo);
    }
    async findMensual(rajo) {
        return await this.reporteService.findReportMensual(rajo);
    }
    async findAnual(rajo) {
        return await this.reporteService.findReportAnual(rajo);
    }
    findOne(fecha) {
        return this.reporteService.findOne(fecha);
    }
    update(fecha, updateReporteDto) {
        return this.reporteService.update(fecha, updateReporteDto);
    }
    remove(fecha) {
        return this.reporteService.remove(fecha);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_reporte_dto_1.CreateReporteDto]),
    __metadata("design:returntype", Promise)
], ReporteController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('allreportes'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ReporteController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('diario'),
    __param(0, (0, common_1.Query)('rajo')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ReporteController.prototype, "findDiario", null);
__decorate([
    (0, common_1.Get)('semanal'),
    __param(0, (0, common_1.Query)('rajo')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ReporteController.prototype, "findSemanal", null);
__decorate([
    (0, common_1.Get)('mensual'),
    __param(0, (0, common_1.Query)('rajo')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ReporteController.prototype, "findMensual", null);
__decorate([
    (0, common_1.Get)('anual'),
    __param(0, (0, common_1.Query)('rajo')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ReporteController.prototype, "findAnual", null);
__decorate([
    (0, common_1.Get)(':fecha'),
    __param(0, (0, common_1.Param)('fecha')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Date]),
    __metadata("design:returntype", void 0)
], ReporteController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('fecha')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Date, update_reporte_dto_1.UpdateReporteDto]),
    __metadata("design:returntype", void 0)
], ReporteController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':fecha'),
    __param(0, (0, common_1.Param)('fecha')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Date]),
    __metadata("design:returntype", void 0)
], ReporteController.prototype, "remove", null);
exports.ReporteController = ReporteController = __decorate([
    (0, common_1.Controller)('reporte'),
    __metadata("design:paramtypes", [reporte_service_1.ReporteService])
], ReporteController);
//# sourceMappingURL=reporte.controller.js.map