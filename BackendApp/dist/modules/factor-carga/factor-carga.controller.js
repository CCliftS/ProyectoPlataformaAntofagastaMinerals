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
exports.FactorCargaController = void 0;
const common_1 = require("@nestjs/common");
const factor_carga_service_1 = require("./factor-carga.service");
const create_factor_carga_dto_1 = require("./dto/create-factor-carga.dto");
const rajo_entity_1 = require("../../entities/rajo.entity");
let FactorCargaController = exports.FactorCargaController = class FactorCargaController {
    constructor(factorCargaService) {
        this.factorCargaService = factorCargaService;
    }
    async create(createFactorCargaDto) {
        const createdFactorCarga = await this.factorCargaService.create(createFactorCargaDto);
        return createdFactorCarga;
    }
    async findAll() {
        return await rajo_entity_1.Rajo;
    }
    findOne(id) {
        return this.factorCargaService.findOne(+id);
    }
    remove(id) {
        return this.factorCargaService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)('newFactorCarga'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_factor_carga_dto_1.CreateFactorCargaDto]),
    __metadata("design:returntype", Promise)
], FactorCargaController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('rajos'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FactorCargaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FactorCargaController.prototype, "findOne", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FactorCargaController.prototype, "remove", null);
exports.FactorCargaController = FactorCargaController = __decorate([
    (0, common_1.Controller)('factor-carga'),
    __metadata("design:paramtypes", [factor_carga_service_1.FactorCargaService])
], FactorCargaController);
//# sourceMappingURL=factor-carga.controller.js.map