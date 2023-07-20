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
exports.DatosPlanService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const datos_plan_entity_1 = require("../../entities/datos_plan.entity");
let DatosPlanService = exports.DatosPlanService = class DatosPlanService {
    constructor(datosPlanRepository) {
        this.datosPlanRepository = datosPlanRepository;
    }
    async create(createDatosPlanDto) {
        const datosPlan = this.datosPlanRepository.create(createDatosPlanDto);
        return await this.datosPlanRepository.save(datosPlan);
    }
    async findDatosPlanDiario(rajo) {
        const fechaActual = new Date();
        fechaActual.setHours(0, 0, 0, 0);
        const datosPlan = await this.datosPlanRepository.find({
            where: {
                fecha: fechaActual,
                rajo: rajo
            },
        });
        return datosPlan;
    }
    async findDatosPlanSemanal(rajo) {
        const fechaActual = new Date();
        fechaActual.setUTCHours(0, 0, 0, 0);
        const fechaInicioSemana = new Date(fechaActual);
        fechaInicioSemana.setDate(fechaInicioSemana.getDate() - fechaInicioSemana.getDay() - 1);
        const fechaFinSemana = new Date(fechaActual);
        fechaFinSemana.setDate(fechaFinSemana.getDate() + (7 - fechaFinSemana.getDay()));
        const datosPlan = await this.datosPlanRepository.find({
            where: {
                fecha: (0, typeorm_2.Between)(fechaInicioSemana, fechaFinSemana),
                rajo: rajo
            },
        });
        return datosPlan;
    }
    async findDatosPlanMensual(rajo) {
        const fechaActual = new Date();
        fechaActual.setUTCHours(0, 0, 0, 0);
        const fechaInicioMes = new Date(fechaActual.getFullYear(), fechaActual.getMonth(), 1);
        const fechaFinMes = new Date(fechaActual.getFullYear(), fechaActual.getMonth() + 1, 0);
        const datosPlan = await this.datosPlanRepository.find({
            where: {
                fecha: (0, typeorm_2.Between)(fechaInicioMes, fechaFinMes),
                rajo: rajo
            },
        });
        return datosPlan;
    }
    async findDatosPlanAnual(rajo) {
        const fechaActual = new Date();
        fechaActual.setUTCHours(0, 0, 0, 0);
        const fechaInicioAño = new Date(fechaActual.getFullYear(), 0, 1);
        const fechaFinAño = new Date(fechaActual.getFullYear(), 11, 31);
        const datosPlan = await this.datosPlanRepository.find({
            where: {
                fecha: (0, typeorm_2.Between)(fechaInicioAño, fechaFinAño),
                rajo: rajo
            },
        });
        return datosPlan;
    }
    findAll() {
        return `This action returns all datosPlan`;
    }
    async findOne(fecha) {
        const datosPlan = await this.datosPlanRepository.find({
            where: {
                fecha: fecha
            }
        });
        return `This action returns a #${fecha} datosPlan`;
    }
    update(fecha, updateDatosPlanDto) {
        return `This action updates a #${fecha} datosPlan`;
    }
    remove(fecha) {
        return `This action removes a #${fecha} datosPlan`;
    }
};
exports.DatosPlanService = DatosPlanService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(datos_plan_entity_1.DatosPlan)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], DatosPlanService);
//# sourceMappingURL=datos_plan.service.js.map