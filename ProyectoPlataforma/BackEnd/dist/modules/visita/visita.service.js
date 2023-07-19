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
exports.VisitaService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const visita_entity_1 = require("../../entities/visita.entity");
const typeorm_2 = require("typeorm");
let VisitaService = exports.VisitaService = class VisitaService {
    constructor(visitaRepository) {
        this.visitaRepository = visitaRepository;
    }
    async create(createVisitaDto) {
        const visita = this.visitaRepository.create(createVisitaDto);
        return await this.visitaRepository.save(visita);
    }
    async findAll() {
        return await this.visitaRepository.find();
    }
    async findOne(correo) {
        const visita = await this.visitaRepository.findOne({
            where: {
                correo: correo
            }
        });
        if (visita) {
            return visita;
        }
        return null;
        return `This action returns a #${correo} visita`;
    }
    update(correo, updateVisitaDto) {
        return `This action updates a #${correo} visita`;
    }
    remove(correo) {
        return `This action removes a #${correo} visita`;
    }
};
exports.VisitaService = VisitaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(visita_entity_1.Visita)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], VisitaService);
//# sourceMappingURL=visita.service.js.map