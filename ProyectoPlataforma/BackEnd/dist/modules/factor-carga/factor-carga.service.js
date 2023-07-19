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
exports.FactorCargaService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const factor_carga_entity_1 = require("../../entities/factor-carga.entity");
let FactorCargaService = exports.FactorCargaService = class FactorCargaService {
    constructor(factorCargaRepository) {
        this.factorCargaRepository = factorCargaRepository;
    }
    async create(createFactorCargaDto) {
        const factor_carga = new factor_carga_entity_1.FactorCarga();
        factor_carga.rajo = createFactorCargaDto.rajo;
        factor_carga.fecha_inicio = new Date(createFactorCargaDto.fecha_inicio);
        factor_carga.fecha_termino = new Date(createFactorCargaDto.fecha_termino);
        factor_carga.tonelaje = createFactorCargaDto.tonelaje;
        return await this.factorCargaRepository.save(factor_carga);
    }
    findAll() {
        return `This action returns all factorCarga`;
    }
    findOne(id) {
        return `This action returns a #${id} factorCarga`;
    }
    update(id, updateFactorCargaDto) {
        return `This action updates a #${id} factorCarga`;
    }
    remove(id) {
        return `This action removes a #${id} factorCarga`;
    }
};
exports.FactorCargaService = FactorCargaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(factor_carga_entity_1.FactorCarga)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], FactorCargaService);
//# sourceMappingURL=factor-carga.service.js.map