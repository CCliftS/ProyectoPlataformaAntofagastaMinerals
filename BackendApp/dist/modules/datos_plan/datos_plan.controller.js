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
exports.DatosPlanController = void 0;
const common_1 = require("@nestjs/common");
const datos_plan_service_1 = require("./datos_plan.service");
const create_datos_plan_dto_1 = require("./dto/create-datos_plan.dto");
const update_datos_plan_dto_1 = require("./dto/update-datos_plan.dto");
let DatosPlanController = exports.DatosPlanController = class DatosPlanController {
    constructor(datosPlanService) {
        this.datosPlanService = datosPlanService;
    }
    create(createDatosPlanDto) {
        return this.datosPlanService.create(createDatosPlanDto);
    }
    findAll() {
        return this.datosPlanService.findAll();
    }
    async findDiario(rajo) {
        return await this.datosPlanService.findDatosPlanDiario(rajo);
    }
    async findSemanal(rajo) {
        return await this.datosPlanService.findDatosPlanSemanal(rajo);
    }
    async findMensual(rajo) {
        return await this.datosPlanService.findDatosPlanMensual(rajo);
    }
    async findAnual(rajo) {
        return await this.datosPlanService.findDatosPlanAnual(rajo);
    }
    findOne(fecha) {
        return this.datosPlanService.findOne(fecha);
    }
    update(fecha, updateDatosPlanDto) {
        return this.datosPlanService.update(fecha, updateDatosPlanDto);
    }
    remove(fecha) {
        return this.datosPlanService.remove(fecha);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_datos_plan_dto_1.CreateDatosPlanDto]),
    __metadata("design:returntype", void 0)
], DatosPlanController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DatosPlanController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('diario'),
    __param(0, (0, common_1.Query)('rajo')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DatosPlanController.prototype, "findDiario", null);
__decorate([
    (0, common_1.Get)('semanal'),
    __param(0, (0, common_1.Query)('rajo')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DatosPlanController.prototype, "findSemanal", null);
__decorate([
    (0, common_1.Get)('mensual'),
    __param(0, (0, common_1.Query)('rajo')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DatosPlanController.prototype, "findMensual", null);
__decorate([
    (0, common_1.Get)('anual'),
    __param(0, (0, common_1.Query)('rajo')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DatosPlanController.prototype, "findAnual", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Date]),
    __metadata("design:returntype", void 0)
], DatosPlanController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Date, update_datos_plan_dto_1.UpdateDatosPlanDto]),
    __metadata("design:returntype", void 0)
], DatosPlanController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Date]),
    __metadata("design:returntype", void 0)
], DatosPlanController.prototype, "remove", null);
exports.DatosPlanController = DatosPlanController = __decorate([
    (0, common_1.Controller)('datos-plan'),
    __metadata("design:paramtypes", [datos_plan_service_1.DatosPlanService])
], DatosPlanController);
//# sourceMappingURL=datos_plan.controller.js.map